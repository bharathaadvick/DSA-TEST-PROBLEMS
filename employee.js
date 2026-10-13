class Vehicle {
    constructor(brand,model,speed){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    getdetails(){
        console.log("Brand",this.brand);
        console.log("Speed",this.speed);
        console.log("Model",this.model);
    }
}
class Car extends Vehicle{
   Start(){
    console.log("The Car is Started");
   }
   Stop(){
    console.log("The Car engine is OFF");
   }
   constructor(brand,speed,model){
    super(brand,speed,model);
   }
}
class Bikes extends Vehicle{
   Start(){
    console.log("The Bikes is Started");
   }
   Stop(){
    console.log("The Bikes engine is OFF");
   }
   constructor(brand,speed,model){
    super(brand,speed,model);
   }
}
class Trucks extends Vehicle{
   Start(){
    console.log("The trucks is Started");
   }
   Stop(){
    console.log("The trucks engine is OFF");
   }
   constructor(brand,speed,model){
    super(brand,speed,model);
   }
}
const car = new Car("Audi","500CC","X21");
const bike = new Bikes("Ducati","300CC","V26");
const truck = new Trucks("TATA","200CC","B26");
car.getdetails();
car.Start();
car.Stop();

console.log("-----------------------------");
bike.getdetails();
bike.Start();
bike.Stop();

console.log("-----------------------------");
truck.getdetails();
truck.Start();
truck.Stop();