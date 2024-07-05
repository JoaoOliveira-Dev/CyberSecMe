import express from "express";
import {
  getUsers,
  updateUsers,
  deleteUser,
  createUser,
} from "../controllers/user.js";

const routes = express.Router();

routes.post("/createUser", createUser);

routes.get("/getusers", getUsers);

routes.put("/updateusers/:id", updateUsers);

routes.delete("/deleteuser/:id", deleteUser);

export default routes;
