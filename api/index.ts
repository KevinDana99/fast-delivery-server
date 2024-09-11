import express from "express";
import api from "./routes";
import { PORT } from "./constants";
import { handleWebSocketsConnection } from "./sockets";

const app = express();
app.use(express.json());
handleWebSocketsConnection(app);
api(app);

app.listen(PORT, () => {
  console.log("server on port " + PORT);
});
export default app;
