const { WebSocketServer } = require('ws');

function createWebSocketServer(httpServer) {
    const wss = new WebSocketServer({ server: httpServer });

    wss.on('connection', (ws) => {
        ws.isAlive = true;

        ws.on('message', (message) => {
            console.log(`Received message: ${message}`);
            // Broadcast the message to all connected clients
            wss.clients.forEach((client) => {
                if (client != ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });

        ws.on('pong', () => {
            ws.isAlive = true;
        })
    });

    return wss;
}

// Periodically send out a ping message to make sure clients are alive
setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);

module.exports = { createWebSocketServer };