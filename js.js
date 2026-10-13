
const { randomUUID } = require("crypto");
-
class Payment {
    constructor() {
        if (new.target === Payment) {
            throw new Error("Payment class cannot be instantiated directly");
        }
    }

    pay(amount) {
        throw new Error("Pay method must be implemented");
    }
}

class UPIPayment extends Payment {
    pay(amount) {
        return `Rs.${amount} paid through UPI`;
    }
}

class CardPayment extends Payment {
    pay(amount) {
        return `Rs.${amount} paid through Card`;
    }
}

class CashPayment extends Payment {
    pay(amount) {
        return `Rs.${amount} paid through Cash`;
    }
}

class PaymentManager {
    constructor() {
        this.transactions = [];
    }

    processPayment(paymentMethod, amount) {
        if (typeof amount !== "number" ||
            !Number.isFinite(amount) ||
            amount <= 0) {
            throw new Error("Amount must be a positive number");
        }

        if (!(paymentMethod instanceof Payment)) {
            throw new Error("Invalid payment method");
        }

        const transaction = {
            id: randomUUID(),
            amount,
            status: "SUCCESS",
            message: paymentMethod.pay(amount),
            date: new Date().toLocaleString()
        };

        this.transactions.push(transaction);

        return transaction;
    }

    getPaymentHistory() {
        return this.transactions;
    }

    getTotalAmount() {
        return this.transactions.reduce(
            (total, transaction) => total + transaction.amount,
            0
        );
    }
}

// Create payment methods
const upi = new UPIPayment();
const card = new CardPayment();
const cash = new CashPayment();

// Create payment manager
const manager = new PaymentManager();

// Process payments
try {
    console.log(manager.processPayment(upi, 1000));
    console.log(manager.processPayment(card, 2000));
    console.log(manager.processPayment(cash, 500));

    console.log("\nPayment History:");
    console.log(manager.getPaymentHistory());

    console.log("\nTotal Amount:");
    console.log(`Rs.${manager.getTotalAmount()}`);
} catch (error) {
    console.log("Payment Error:", error.message);
}
    