class animal{
    eat(){
        console.log("Animal is eating");
    }
};
class Dog extends animal{
    bark(){
        console.log("Dog is barking");
    }
}
const dog = new Dog()
dog.eat();
dog.bark();