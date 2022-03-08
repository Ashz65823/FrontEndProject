const name="Ashwini";
const age=24;
//console.log("My name is"+ name+"and my age is"+age)
console.log(`My name is ${name} and my age is ${age}`)

let student={//refence
    name:"Swetha",//json object creation
    email:"swethapapu4@gmail.com",
    sayDetails:function(){//function declaration
        console.log(`The student name is ${this.name} and the email is ${this.email}`)
    }
}

student.sayDetails();//function call
