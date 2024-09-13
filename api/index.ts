import express from "express";
import { PORT } from "./constants";
import { handleWebSocketsConnection } from "./sockets";
import api from "./routes";

const app = express();
app.use(express.json());
const server = handleWebSocketsConnection(app);

api(app);

server.listen(PORT, () => {
  console.log("server on port " + PORT);
});
export default app;
