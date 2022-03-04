function Employee(a, b, c) {//constructor fuction sice calling using new
    this.id = a;//object id,name,salary
    this.name = b;
    this.salary = c;

    this.computeAllowance = function () {
        return this.salary * 0.30
    }
    //this.computeAllowance2 = () => this.salary * 0.25;//can be writen like this as well
    this.computeNetSalary = () => this.salary + this.computeAllowance();//short way of writng function
}
Employee(101, "Ram", 4500.00);//invocation of function
var e1 = new Employee(101, "Ram", 4500.00);//treated as constructore and stored in constrctor since new is used-->e1 is object
console.log(e1.computeAllowance());
//console.log(e1.computeAllowance2());
console.log(e1.computeNetSalary());
var e2 = new Employee(102, "Aishu", 5000);
console.log(e2.computeAllowance());
//console.log(e2.computeAllowance2());
console.log(e2.computeNetSalary());
