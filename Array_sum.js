
var i;
var sum=0;

var n=new Array();



for(i=0;i<6;i++)
{

n[i]=parseFloat(prompt("Enter number : "));
document.write(n[i]+"<br/>");
sum=sum+n[i];

}

document.write("The sum is : "+sum);

/*var sum=0;

for(i=0;i<6;i++)
{

    sum=sum+n[i];

}

document.write("The sum is : "+sum);*/


/*


OUTPUT:

0
1
2
3
4
5
The sum is : 15

*/
