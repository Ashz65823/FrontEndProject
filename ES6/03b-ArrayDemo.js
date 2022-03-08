var nameArray = ['mary', 'edwin', 'mark', 'john'];
console.log(nameArray);

function convert(s) {
    return s.toUpperCase();
}

var upperArray = nameArray.map(convert)
console.log(upperArray);
console.log(nameArray)
//map is like each elememt to be mapped to other element
//it will be decided by convert function
//here mary will be mapped to UpperCase MARY as so as other elemets will be
//mapped to the corresponding element

let price=[2,4,6,8];
function f1(e){
    return e*e;
}
var arr=price.map(f1);
console.log(arr);
//here 2 will be mapped to f1 wvh will square 2 to 4
