var prices = [89.30, 45.33, 90.00, 78.90, 30.90, 56.00];
for (i = 0; i < prices.length; i++)//if var i is not given by default it will take var type-- this is called implesite declaration; 
{
    console.log(prices[i])
}

function printElement(elements)//lambda expression like consumer
{
    console.log(elements);//take each element from array
}

console.log("-------------------------------------------------------")
prices.forEach(printElement)//take function as input;

/* here foreach will call printElement function and each element is sent to the  
printElement function and it is printed in console 
if prices.forEach(printElement) not given them function printElement will not execute
 */

var names = ["ash", "swetha", "savi", "aishu"]//array of strings;
names.forEach(printElement);//this is calling printElement(elements) function and iterate accordingly
/*var j-->expliciy declaration
j="ash";
i=10;explicite declaration
 */
console.log("-----------------------------------------------------")
prices.forEach(
    function (e) {//unname function
        console.log(e);
    }
)
//this is equal to
/*function printElement(elements)//named function--->lambda expression like consumer
{
    console.log(elements);//take each element from array
} */
console.log("-----------------------------------------------------")
prices.forEach(
    (e)=>
    {console.log(e);
    }
)