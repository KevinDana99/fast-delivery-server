import WebSocket from "ws";
const handleWebSocketLocation = (ws: WebSocket, wss: WebSocket.Server) => {
  ws.on("message", (message: string) => {
    try {
      const data = JSON.parse(message);
      if (data.type === "location") {
        console.log(
          `Received location: Latitude ${data.lat}, Longitude ${data.lng}`
        );
        // Reenvía la ubicación a todos los clientes conectados
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(
              JSON.stringify({
                type: "location",
                lat: data.lat,
                lng: data.lng,
              })
            );
          }
        });
      }
    } catch (error) {
      console.error("Error processing message:", error);
    }
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
};

export default handleWebSocketLocation;
