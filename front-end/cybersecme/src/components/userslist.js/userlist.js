import {
  Grommet,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Layer,
  Button,
  TextInput,
} from "grommet";
import { GrEdit, GrTrash } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";

import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  const [id, setId] = useState();
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getUsers() {
      try {
        const resUsers = await axios.get("http://localhost:3001/getusers");
        setUsers(resUsers.data);
        console.log("Usuarios dentro da função: ", resUsers.data);
      } catch (error) {
        console.error("Erro ao obter os usuários:", error);
      }
    }

    getUsers();
  }, []);

  const handleEdit = (item) => {
    setOpen(!open);

    setId(item.id);
    setUsuario(item.usuario);
    setSenha(item.senha);
  };

  const updateUser = async (e) => {
    // e.preventDefault();

    await axios
      .put("http://localhost:3001/updateusers/" + id, {
        usuario: usuario,
        senha: senha,
      })
      .then(({ data }) => {
        console.log("enviado: ", data);
        toast.success("Conta alterada com sucesso!");

        setOpen(!open);
      })
      .catch(({ data }) => toast.error(data));
  };

  const deleteUser = async (item) => {
    await axios
      .delete("http://localhost:3001/deleteuser/" + item.id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  };

  // console.log("usuários ", users);

  return (
    <Grommet>
      {/* {open && <UserEditModal isOpen={open} setOpen={setOpen} />} */}
      {open && (
        <Layer
          onEsc={() => setOpen(false)}
          onClickOutside={() => setOpen(false)}
          style={{ width: "30%", height: "22vh", padding: "10px" }}
        >
          <TextInput
            placeholder="Usuário"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextInput
            placeholder="Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <Button
            label="Salvar"
            onClick={(e) => updateUser(e)}
            style={{ marginTop: "20px" }}
          />
          <Button
            label="Fechar"
            onClick={() => setOpen(false)}
            style={{ marginTop: "10px" }}
          />
        </Layer>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              ID
            </TableCell>
            <TableCell scope="col" border="bottom">
              Usuário
            </TableCell>
            <TableCell scope="col" border="bottom">
              Senha
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users
            ? users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell scope="row">
                    <strong>{user.id}</strong>
                  </TableCell>
                  <TableCell scope="row">
                    <strong>{user.usuario}</strong>
                  </TableCell>
                  <TableCell>{user.senha}</TableCell>
                  <TableCell>
                    <GrEdit
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => handleEdit(user)}
                    />
                    <GrTrash
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteUser(user)}
                    />
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
      <ToastContainer closeButton={false} />
    </Grommet>
  );
}

export default UserList;
