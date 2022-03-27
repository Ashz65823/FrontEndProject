function printBasicDetails(a, b) {
    console.log("ID: " + this.id);
    console.log("Name: " + this.name);
    console.log("A: " + a);
    console.log("B: " + b);
}
var emp1 = {
    id: 1001,
    name: "Ram",
    salary: 10000.00,
    grade: 'A'
}
var emp2 = {
    id: 1002,
    name: "Savi",
    salary: 20000.00,
    grade: 'B'
}
var stud1 = {
    id: 2001,
    name: "Aishu",
    mark: 80.0,
    rating: 4.0
}
//printBasicDetails.call(emp1,100,200);
//printBasicDetails.call(emp2,500,600);
//printBasicDetails.call(stud1,1000,2000);
printBasicDetails.call(500, 600, emp1);
/*
When a function is defind object of the funtion is created automatically
    -call() used when an object of the function is created
    -call should have object 1st and then parameter
*/