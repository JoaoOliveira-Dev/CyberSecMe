const express = require("express");
const routes = express.Router();
const getUsers = require("./controllers/user");

routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`Email: ${email} / Senha: ${password}`);
});

routes.get("/getusers", getUsers);

module.exports = routes;
