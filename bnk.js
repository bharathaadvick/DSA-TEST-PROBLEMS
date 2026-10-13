class BankAccount {
    constructor(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn: ₹${amount}`);
    }
    checkBalance() {
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: ₹${this.balance}`);
    }
}
const account = new BankAccount("Brook", "1234567890", 5000);
account.checkBalance();
account.deposit(2000);
account.withdraw(1000);
account.checkBalance();
