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

    setInterval(() => {
        wss.clients.forEach(function each(client) {
          if (client.isAlive === false) return client.terminate();
    
          client.isAlive = false;
          client.ping();
        });
      }, 10000);
}


module.exports = { createWebSocketServer };