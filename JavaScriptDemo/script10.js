function add(a,b)
{
    if(typeof b=="undefined")
        b=0;
    if(typeof a=="undefined")
        a=0;
    return a+b;
}
var subtract=function(a,b)
{
    return a-b;
}
var multiply=(a,b)=>{
    return a*b;
}
console.log(add(10,20));
// console.log(subtract(100,80));
// console.log(multiply(3,8));
console.log(add(4,5,6,7,8,9));//only 1st two value are taken others are ignored
console.log(add(10));//since b is not defind it's output will be NaN(not a number)