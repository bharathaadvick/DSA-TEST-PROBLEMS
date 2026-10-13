class Animal{
    sound(){
        console.log("Animals Makes a Sound");
    }
}
class Dog extends  Animal{
    sound(){
        console.log("Dog Barks");
    }
}
class Cat extends Animal{
    sound(){
        console.log("Cat Meoww");
    }
}
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.sound();
dog.sound();
cat.sound();
