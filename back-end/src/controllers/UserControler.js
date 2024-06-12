import { Router } from "express";
import getUsers from "./user";

const express = express;
const routes = Router();

routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`Email: ${email} / Senha: ${password}`);
});

routes.get("/getusers", getUsers);

export default routes;
