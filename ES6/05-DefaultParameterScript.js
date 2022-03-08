function multiply(a=10,b=5,c=1)
{
    console.log(a*b*c);
}
multiply(2,3,5);//no default value is take result is 30
multiply(2,3);//1
multiply(2)//5,1
multiply()//10,5,1-->take this default value reult is 50