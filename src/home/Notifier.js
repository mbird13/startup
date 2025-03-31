class Notification {
    constructor(from, value) {
        this.from = from;
        this.value = value;
    }
}

class Notifier {
    handlers = []

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onmessage = async (msg) => {
        try {
            const event = JSON.parse(await msg.data.text());
            this.receiveNotification(event);
        } catch {}
        };
    }

    sendNotification(from, value) {
        const event = new Notification(from, value);
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(event));
        }
      }

    receiveNotification(event) {
        this.handlers.forEach((handler) => {
            handler(event);
        });
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }
}

const MyNotifier = new Notifier();
export { MyNotifier };