class Notification {
    constructor(from, value) {
        this.from = from;
        this.value = value;
    }
}

class Notifier {
    handlers = []

    constructor() {
        setInterval(() => {
            const user = 'James';
            const value = 'Drunken Noodles';
            this.sendNotification('James', 'Drunken Noodles');

        }, 5000);
    }

    sendNotification(from, value) {
        const event = new Notification(from, value);
        this.receiveNotification(event);
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
export { Notification, MyNotifier };