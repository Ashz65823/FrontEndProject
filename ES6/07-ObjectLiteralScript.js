let productName="LG Refrgerator";
let price=150000.00;
let category="Home Appliance";

//ES5 code jason object creation
var product1={
    "ProductName":productName,
    "Price":price,
    "Category":category
}

//ES6 code json object creation
const product={
    productName,
    price,
    category
}
console.log(product);
console.log("----------------------------------------")
console.log(product1)