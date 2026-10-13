class Payment {
    pay(amount) {
        throw new Error("Pay Must be implemented");
    }
}

class UPIPayment extends Payment {
    pay(amount) {
        console.log(`Rs.${amount} paid through UPI`);
    }
}

class CardPayment extends Payment {
    pay(amount) {
        console.log(`Rs.${amount} paid through Card`);
    }
}

class CashPayment extends Payment {
    pay(amount) {
        console.log(`Rs.${amount} paid through Cash`);
    }
}
const upi = new UPIPayment();
const card = new CardPayment();
const cash = new CashPayment();
upi.pay(1000);
card.pay(2000);
cash.pay(500);
