class car{
    start(){
        this.startengine();
        console.log("Car Started");
    }
    startengine(){
        console.log("Engine Startd internally");
    }
}
const Car = new car();
Car.start();
