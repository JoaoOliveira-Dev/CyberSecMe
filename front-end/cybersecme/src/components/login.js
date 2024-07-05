import "./login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="loginBox">
        <h1 className="title">Login</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Usuário"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" name="logar" onClick={() => alert(1)}>
            Entrar
          </button>
        </form>

        <div className="links">
          {/* <a href="#">Esqueceu a senha?</a> */}
          <a href="/createaccount">Criar uma conta</a>
          <a href="/listusers">Renderizar lista</a>
        </div>
      </div>
      <ToastContainer closeButton={false} />
    </div>
  );
}
