// Import React
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import para conectar com o servidor
import Axios from "axios";

// Import CSS
import "./createaccount.css";

function CreateAccountComp() {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <div className="CreateAccountBox">
        <h1 className="title">Criar Conta</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Digite o seu nome"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" onClick={() => alert(1)}>
            Criar Conta
          </button>
          <ToastContainer closeButton={false} />
        </form>
      </div>
    </div>
  );
}

export default CreateAccountComp;
