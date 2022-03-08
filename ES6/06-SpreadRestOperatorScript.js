let number=[60.0,70.0,80.0,90.0];
let cities=["delhi","mumbai","chennai",...number,"Bangalore"];
console.log(cities);
console.log("-------------------------------------------------")
function multiply(i,j,k)//take only 3 values 43,41,50
{
    console.log(`The multiplication of ${i*j*k}`)
}
const marks=[34,41,50,60];
multiply(...marks)
console.log("-------------------------------------------------")

let arr1=["welcome","hello","world"];
let arr2=[...arr1];
console.log(arr2)
console.log("-------------------------------------------------")

print("country","Cannada","India","US");
function print(prefix,...elements)//country is taken as prefix, others are taken as elements
//function can take only 1 rest parametet at a time and that should be the last parameter
{
    elements.forEach(
        e=>console.log(`${prefix}:${e}`)
    )
}