
class NotificationSystem {
    constructor() {
        if (new.target === NotificationSystem) {
            throw new Error(
                "NotificationSystem cannot be instantiated directly"
            );
        }
    }

    validateMessage(message) {
        if (typeof message !== "string" || message.trim() === "") {
            throw new Error("Message cannot be empty");
        }
    }

    send(message) {
        throw new Error("Send method must be implemented");
    }
}

class Email extends NotificationSystem {
    send(message) {
        this.validateMessage(message);

        console.log(`Email Notification: ${message}`);

        return "Email sent successfully";
    }
}

class SMS extends NotificationSystem {
    send(message) {
        this.validateMessage(message);

        console.log(`SMS Notification: ${message}`);

        return "SMS sent successfully";
    }
}

class Whatsapp extends NotificationSystem {
    send(message) {
        this.validateMessage(message);

        console.log(`WhatsApp Notification: ${message}`);

        return "WhatsApp message sent successfully";
    }
}

// Create objects
const email = new Email();
const sms = new SMS();
const whatsapp = new Whatsapp();

// Common message
const message = "Your payment was successful!";

// Send notifications
try {
    console.log(email.send(message));
    console.log(sms.send(message));
    console.log(whatsapp.send(message));
} catch (error) {
    console.log("Notification Error:", error.message);
}
