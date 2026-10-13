class Employee{
    constructor(EmployeeName, ID, Salary, Department){
        this.EmployeeName = EmployeeName;
        this.ID = ID;
        this.Salary = Salary;
        this.Department = Department;
    }
    getdetails(){
        console.log("EmployeeName:" , this.EmployeeName);
        console.log("ID :", this.ID);
        console.log("Salary :" , this.Salary);
        console.log("Department :",this.Department);
    }
}
class Developers extends Employee{
    constructor(EmployeeName,ID,Salary,Department){
        super(EmployeeName,ID,Salary,Department);
    }
    emp(){
         console.log("The Developer is Coding...");
    }
}
class Managers extends  Employee{
    constructor(EmployeeName,ID,Salary,Department){
        super(EmployeeName,ID,Salary,Department);
    }
    manag(){
        console.log("The Manager is Managing the code....");
    }
}
class Testers extends Employee{
    constructor(EmployeeName,ID,Salary,Department){
        super(EmployeeName,ID,Salary,Department);
    }
    test(){
        console.log("The tester is testing a code.....");
    }
}
const developer = new Developers("Bharath","CSE123098",40000,"Fullstack");
const manager = new Managers("Ram","IT123098",40000,"Team Lead");
const tester = new Testers("Kishore","BE123098",40000,"Testing");
developer.getdetails();
developer.emp();
console.log("--------------------------------");
manager.getdetails();
manager.manag();
console.log("---------------------------------");
tester.getdetails();
tester.test();
