class BankAccount{
    constructor(Balance){
        this.Balance = Balance;
    }
    deposite(amount){
        if(amount>0){
            this.Balance += amount;
            console.log("Amount debited Sucessfully");
        }else{
            console.log("Invalid Amount");
        }
    }
    getBalance(){
        return this.Balance;
    }
}
const account =new BankAccount(50000);
account.deposite(20000);
console.log("Account Balance :" +  account.getBalance());

