class Account {
     //id: number;
    //name: String;
    age:number;
    constructor( public id: number, private name: String, age:number) {
        //age is local to constructor-- this are instance variable//id and age are instance because they are declared outside constr
        this.id = id;
        //this.name = name;
        //this.age=age;
    }
}
let act = new Account(101, "Saving",23);//object creation
//let act : Account=new Account();//object creation 
console.log(act.id);
//console.log(act.name);//since name is of private only accessable in class
console.log(act.age);