class Vehicle {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    getDetails() {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Speed:", this.speed);
    }
}
class Car extends Vehicle {
    constructor(brand, model, speed) {
        super(brand, model, speed);
    }
    start() {
        console.log("The car is started");
    }
    stop() {
        console.log("The car engine is OFF");
    }
}
class Bike extends Vehicle {
    constructor(brand, model, speed) {
        super(brand, model, speed);
    }
    start() {
        console.log("The bike is started");
    }
    stop() {
        console.log("The bike engine is OFF");
    }
}
class Truck extends Vehicle {
    constructor(brand, model, speed) {
        super(brand, model, speed);
    }
    start() {
        console.log("The truck is started");
    }
    stop() {
        console.log("The truck engine is OFF");
    }
}
const car = new Car("Audi", "X21", "500CC");
const bike = new Bike("Ducati", "V26", "300CC");
const truck = new Truck("TATA", "B26", "200CC");
car.getDetails();
car.start();
car.stop();
console.log("-----------------------------");
bike.getDetails();
bike.start();
bike.stop();
console.log("-----------------------------");
truck.getDetails();
truck.start();
truck.stop();
