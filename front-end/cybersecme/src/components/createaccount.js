// Import React
import { useState } from "react";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import para conectar com o servidor
import Axios from "axios";

// Import CSS
import "./createaccount.css";

function CreateAccountComp() {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/createUser", {
        nome,
        usuario,
        email,
        senha,
      })
      .then((response) => {
        toast.success("Conta criada com sucesso");

        setNome("");
        setUsuario("");
        setEmail("");
        setSenha("");
      })
      .catch((error) => {
        toast.error("Erro ao criar a conta. Tente novamente mais tarde");
      });
  };

  return (
    <div className="container">
      <div className="CreateAccountBox">
        <h1 className="title">Criar Conta</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Digite o seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" onClick={submit}>
            Criar Conta
          </button>
          <ToastContainer closeButton={false} />
        </form>
      </div>
    </div>
  );
}

export default CreateAccountComp;
