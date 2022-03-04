function f1() {
    console.log("f1 function");
    function f2() {
        console.log("f2 fnction");
    }
    f2();//calling f2 inside f1
}
f1();
