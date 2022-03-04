function f1()
{
    console.log("f1 function")

    function f2()
    {
        console.log("f2 function")
    }
    return f2;
}
var r=f1();//this will have f2 
r();