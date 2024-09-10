import express from "express";
import Api from "./routes";

const server = express();

server.use(express.json());
Api(server);

export default server;
