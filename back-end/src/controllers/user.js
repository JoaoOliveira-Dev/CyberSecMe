import { db } from "../db.js";

export const getUsers = (req, res) => {
  const q = "SELECT * FROM tab_usuario";

  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error fetching users");
    }
    return res.status(200).json(result);
  });
};

export const createUser = (req, res) => {
  const nome = req.body.nome;
  const usuario = req.body.usuario;
  const email = req.body.email;
  const senha = req.body.senha;

  const sqlInsert =
    "INSERT INTO tab_usuario (nome, email, usuario, senha) VALUES (?,?,?,MD5(?));";

  db.query(sqlInsert, [nome, email, usuario, senha], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error inserting user");
    }
    console.log(result);
    return res.status(200).send("User inserted successfully");
  });
};

export const updateUsers = (req, res) => {
  const q = "UPDATE tab_usuario SET `usuario` = ?, `senha` = ? WHERE `id` = ?";

  const values = [req.body.usuario, req.body.senha];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM tab_usuario WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
