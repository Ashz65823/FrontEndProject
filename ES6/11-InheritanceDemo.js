class Employee {
    constructor(n, a, b) {
        this.name = n;
        this.age = a;
        this.basic = b;
    }
    computeAllowance() {
        return this.basic * 0.35;
    }
    computeTotal() {
        return this.basic + this.computeAllowance();
    }
}

class Manager extends Employee
{
    constructor(n,a,b,ec)
    {
        super(n,a,b);
        this.EmployeeCount=ec;
    }
    printEmployeeCount()
    {
        this.log(this.EmployeeCount)
    }
    computeTotal()
    {
        return this.basic+this.computeAllowance()+this.EmployeeCount*100;
    }
}
let m=new Manager("Ravi",33,5500,20)
console.log(m)
console.log(m.computeAllowance())
console.log(m.computeTotal())