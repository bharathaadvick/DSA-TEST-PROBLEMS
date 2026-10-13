class Student{
    constructor(name,age,department){
        this.name = name;
        this.age = age;
        this.department = department;
    }
    get(){
        console.log("Student Name:" + this.name);
        console.log("Student Age:" + this.age);
        console.log("Student Department:" + this.department);
    }
}
let Student1 = new Student("Bharath" , 21 , "CSE");
Student1.get();