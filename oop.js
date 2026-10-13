class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name);
        console.log(this.age);
    }
}

const student1 = new Student("Bharath", 21);

student1.display();