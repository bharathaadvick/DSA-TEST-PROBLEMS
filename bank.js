class Bank{
    constructor(name,bank,balance){
        this.name = name;
        this.bank = bank;
        this.balance = balance;
    }
    get(){
        console.log(`${this.name} sir having an account in the bank of ${this.bank} having the amount of ${this.balance}`);
       
}
}
let Bank1 = new Bank("Bharath" , "SBI" , 25000 );
Bank1.get();
