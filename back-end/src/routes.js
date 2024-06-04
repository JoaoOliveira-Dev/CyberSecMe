const express = require("express");
const routes = express.Router();

routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`Email: ${email} / Senha: ${password}`);
});

module.exports = routes;
