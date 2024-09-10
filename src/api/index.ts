import express from "express";
import Api from "./routes";
import { PORT } from "./constants";

const server = express();

server.use(express.json());

server.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
Api(server);
