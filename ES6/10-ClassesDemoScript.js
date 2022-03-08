// function Employee(n,a,b)
// {
//     this.name = n;
//     this.age = a;
//     this.basic = b;
// }
// this.computeAllowance2=function()
// {
//     return this.basic*0.30;
// }
//the below code use class more like java 
//moving to oops 
class Employee2 {
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
let e3=new Employee2("Raju",35,35000)
console.log(e3);
console.log(e3.computeAllowance());
console.log(e3.computeTotal());

