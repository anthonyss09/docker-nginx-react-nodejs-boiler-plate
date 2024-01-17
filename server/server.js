import express from "express";
const app = express();
//dotenv is a module that loads environment variables from a .env file into process.env
import * as dotenv from "dotenv";
import cors from "cors";

const port = process.env.PORT || 8080;

//express.json() is a built-in middleware function in express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Our boiler plate nodejs server is sending!");
});

app.get("/node-server/get-welcome-message", (req, res) => {
  res.send({ message: "We are connected to our backend!" });
});

app.listen(port, () => {
  console.log(`App is listening on port:${port}`);
});
