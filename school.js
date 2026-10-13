class Bank{
    constructor(balance){
        this.balance = balance;
    }
    deposite(amount){
        if(amount>0){
            this.amount += balance;
            console.log("Amount Deposited Sucessfully");
        }else{
            console.log("Invalid Amount");
        }
    }
     getbalance() {
            return this.balance;
        }
}
const amount = new Bank(5000);
account.deposite(5000);
console.log("Balance Amount : " + amount.getbalance());
