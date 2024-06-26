import express from "express";
import { getUsers } from "./controllers/user.js";

const routes = express.Router();

routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`Email: ${email} / Senha: ${password}`);
});

routes.get("/getusers", getUsers);

export default routes;
