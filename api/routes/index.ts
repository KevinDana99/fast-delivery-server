import { Express } from "express";
import locationRouter from "./v1/location";

const api = (server: Express) => {
  server.use("/api/v1", locationRouter);
};

export default api;
