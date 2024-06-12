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
