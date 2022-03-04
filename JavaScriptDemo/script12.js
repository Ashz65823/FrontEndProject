function add(a, b) {//heigher order function
    console.log(a);
    console.log(b(3, 3));
}

var a = 100;

var f1 = function (a, b) {//lower order function
    return a * 10;
}

var f2=function(a,b)
{
    console.log(a/b);//lower order function
}
add(a, f2);
add(a,(a,b)=>{
    console.log(a-b)
})//annonomous unction
//pass a function as paramtere to other function