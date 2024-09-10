import express from "express";
import Api from "./api/routes";
import { PORT } from "./api/constants";

const server = express();

server.use(express.json());
Api(server);

server.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});

export default server;
