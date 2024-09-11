import http from "http";
import WebSocket from "ws";
import handleWebSocketLocation from "./location";
import { Express } from "express";
export const handleWebSocketsConnection = (app: Express) => {
  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });
  wss.on("connection", (ws: WebSocket) => {
    handleWebSocketLocation(ws, wss);
  });
};
