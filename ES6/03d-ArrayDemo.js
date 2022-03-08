let array = [2, 8, 8.9, 9, 8.7, 7, 6.0, 6.1];
let arrays = [1, 7, 8, 6, 3]
function process(a, b) {
    return a + b;
}
function maxProcess(a, b) {
    if (a > b)
        return a;
    else
        return b;
}
function minProcess(a, b) {
    if (a > b)
        return b;
    else
        return a;
}
let sum = array.reduce(process);
let max = array.reduce(maxProcess);
let min = array.reduce(minProcess);
//reduce function will take 2 value and return 
//the sum-- next call it will send sum along with the next value from array
console.log(sum)
console.log(min)
console.log(max)
console.log(`This is sum ${sum}`)
console.log(`This is Maximum ${max}`)
console.log(`This is Minimum ${min}`)

console.log("--------------------------------------------------------------------")

let sum1 = arrays.reduce(process);
let max1 = arrays.reduce(maxProcess);
let min1 = arrays.reduce(minProcess);
console.log(sum1)
console.log(min1)
console.log(max1)
