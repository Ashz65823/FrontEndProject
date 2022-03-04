function f1()
{
    console.log("f1 function")

    function f2()
    {
        console.log("f2 function")
    }
    return f2;
}
var r=f1();//this will point f2 since f2 is returned
r();

//functions can return function
