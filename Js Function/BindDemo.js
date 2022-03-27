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
var emp1bind= printBasicDetails.bind(emp1,100,200);//create buinding btw function and object
var emp2bind =printBasicDetails.call(emp2,500,600);
var stud1bind=printBasicDetails.call(stud1,1000,2000);
emp1bind();
emp2bind();
stud1bind();
/*
printBasicDetails.bind(emp1,100,200);
the above code will bind the function and the call is done by below method
emp1bind();
emp1bind will bind the object and call the function 
*/