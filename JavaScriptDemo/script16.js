function doSomething(a) {
    console.log(a);//a=10-->a=100
    function execute(i, j) {
        //the value of a is used in inner functio so it is retained
        console.log(i + j + a);//20+30+10-->100+2+1--->Function closure
        //it remnbers invocation context
    }
    return execute;
}
var f1 = doSomething(10);
f1(20, 30);
var f2 = doSomething(100);
f2(1, 2)
var f3 = doSomething(300);
f3(9, 7);
f1(9, 8);
f2(200, 80);