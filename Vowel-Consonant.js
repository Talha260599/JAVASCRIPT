USE IF,ELSE:


var letter;

letter=prompt("Enter any Letter : ");

letter=letter.toLowerCase();

if(letter== "a" || letter== "e" || letter== "i" || letter== "o" || letter== "u")

    document.write("vowel");

        else

          document.write("consonant");


/*

OUTPUT:

Enter any Letter : L
consonant

*/


USE SWITCH :

var letter;

letter=prompt("Enter any Letter : ");

letter=letter.toUpperCase();

switch(letter)
{

case 'A' :
    document.write("vowel");
    break;
case 'E' :
    document.write("vowel");
    break;
case 'I' :
    document.write("vowel");
    break;
case 'O' :
    document.write("vowel");
    break;
case 'U' :
    document.write("vowel");
    break;

default :
    document.write("consonant");

}


/*

OUTPUT:

Enter any Letter : U
vowel

*/
