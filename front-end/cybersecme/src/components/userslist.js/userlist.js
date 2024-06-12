import {
  Grommet,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";
import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

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

  // console.log("usuários ", users);

  return (
    <Grommet>
      <Table>
        <TableHeader>
          <TableRow>
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
                    <strong>{user.usuario}</strong>
                  </TableCell>
                  <TableCell>{user.senha}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </Grommet>
  );
}

export default UserList;
