/*
IIFEs=Immediately Invokeable Function Expressions 
Function expressions are often used in the form of IIFE, where the function is defined and executed immediately after its creation.
*/

//Create an IIFEs that print sum of 2 numbers

var num1,num2;

num1=parseFloat(prompt("Enter num1 : "));
num2=parseFloat(prompt("Enter num2 : "));

(function sum(num1,num2)
{
   
    result=num1+num2;

    document.write("Sum of 2 number is : " +result);

})(num1,num2);



/*
output:

Enter num1 : 6

Enter num2 : 5

Sum of 2 number is : 11

*/
