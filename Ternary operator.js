var num1,num2,num3,result;

num1=parseFloat(prompt("Enter num1 : "));
num2=parseFloat(prompt("Enter num2 : "));
num3=parseFloat(prompt("Enter num3 : "));

result= num1>num2 && num1>num3 ? "max : num1" : num2>num3 ? "max : num2" : "max : num3";

document.write(result);

/*
if (num1>num2 && num1>num3)
 document.write(num1);
else if (num2>num3)
 document.write(num2);
else
document.write(num3);
*/