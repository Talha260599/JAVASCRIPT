// creating a function
function add(num1,num2)
{
    result=num1+num2;

    return result;

}

function sub(num1,num2)
{
    result=num1-num2;

    return result;

}

function mul(num1,num2)
{
    result=num1*num2;

    return result;

}

function div(num1,num2)
{
    result=num1/num2;

    return result;

}

function rem(num1,num2)
{
    result=num1%num2;

    return result;

}


//calling function

var num1=parseFloat(prompt("Enter num1 : "));
var num2=parseFloat(prompt("Enter num2 : "));

document.write(add(num1,num2)+ "<br/>");
document.write(sub(num1,num2)+ "<br/>");
document.write(mul(num1,num2)+ "<br/>");
document.write(div(num1,num2)+ "<br/>");
document.write(rem(num1,num2)+ "<br/>");