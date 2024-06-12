import express from "express";
import routes from "./routes.js";
import cors from "cors";
import { db } from "./db.js";

const port = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
