import express from "express";
import { getUsers, updateUsers, deleteUser } from "../controllers/user.js";

const routes = express.Router();

routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`Email: ${email} / Senha: ${password}`);
});

routes.get("/getusers", getUsers);

routes.put("/updateusers/:id", updateUsers);

routes.delete("/deleteuser/:id", deleteUser);

export default routes;
