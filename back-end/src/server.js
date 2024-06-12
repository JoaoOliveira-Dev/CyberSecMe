import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(routes);

app.use(cors());

const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
