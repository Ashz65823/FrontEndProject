var price=[89.20,45.33,72.0,20.88,40.0];
console.log(price);

function above50Finder(e)
{
    if(e>=50)
        return true;
    else
        return false;
}
var above50Items=price.filter(above50Finder);
console.log(above50Items)

function below50Finder(e)
{
    if(e<50)
        return true;
    else
        return false;
}
var below50Items=price.filter(below50Finder);
console.log(below50Items)


