var Myarray=["Bangladesh","Mango","Tiger","Saintmartin","Roast","Sky"];
document.write("Main Elements : "+Myarray+"<br/>");


//The push() method adds one or more elements to the end of an array and returns the new length of the array.
Myarray.push("Tree","Bird");
document.write("push library : " +Myarray+"<br/>");


//The pop() method removes the last element from an array and returns that element.
Myarray.pop();
document.write("pop library : " +Myarray+"<br/>");


/*
1. The shift() method removes the first element from an array and shifts all remaining elements to a lower index. It returns the removed element.
2. opposite of pop().
*/
Myarray.shift();
document.write("shift library : " +Myarray+"<br/>");


/*
1. The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
2. opposite of push().
*/
Myarray.unshift("Bangladesh");
document.write("unshift library : " +Myarray+"<br/>");



/*
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
Parameters:

start: The index at which to start changing the array. If negative, it will begin from the end.

deleteCount (optional): The number of elements to remove. If set to 0, no elements are removed.

item1, item2, ... (optional): The elements to add to the array, beginning at the start index.
*/
Myarray.splice(3,0,"Cox's Bazar","Keokradong","Kuakata");
document.write("splice library : " +Myarray+"<br/>");



/*
The splice() method is versatile and can be used to remove elements from an array by specifying the index and the number of elements to be removed.

 If you want to use the splice() method to remove multiple elements from an array, you can specify both the start index and the number of elements to remove.

 */

Myarray.splice(7,2);
document.write("splice library : " +Myarray+"<br/>");

//The slice() method extracts a section of an array and returns a new array containing the selected elements.
var newMyarray=Myarray.slice(2);
document.write("slice library : " +newMyarray+"<br/>");

//The sort() method sorts the elements of an array in place and returns the sorted array.
Myarray.sort();
document.write("sort library : " +Myarray+"<br/>");

//The reverse() method reverses the elements of an array in place.
Myarray.reverse();
document.write("reverse library : " +Myarray+"<br/> <br/>");

//To sort an array of numbers in JavaScript, you can use the sort() method. By default, the sort() method sorts elements as strings, so you need to provide a custom compare function to sort numbers correctly. The compare function should return a negative, zero, or positive value, depending on the desired sort order.

var numbers = [42, 8, 17, 99, 1];
document.write("Numbers : " +numbers +"<br/>"); 

// Sort the array of numbers in ascending order
numbers.sort(function(a, b) {
    return a - b;
});
document.write("ascending order : "+numbers+"<br/>");
//In this example, the compare function function(a, b) { return a - b; } subtracts b from a. If the result is negative, it means a should come before b, resulting in ascending order.



// Sort the array of numbers in descending order
numbers.sort(function(a, b) {
    return b - a;
});
document.write("descending order : "+numbers+"<br/>");
//In this example, return b - a; means that if the result is negative, b should come before a, resulting in descending order.



/*
OUTPUT :

Main Elements : Bangladesh,Mango,Tiger,Saintmartin,Roast,Sky
push library : Bangladesh,Mango,Tiger,Saintmartin,Roast,Sky,Tree,Bird
pop library : Bangladesh,Mango,Tiger,Saintmartin,Roast,Sky,Tree
shift library : Mango,Tiger,Saintmartin,Roast,Sky,Tree
unshift library : Bangladesh,Mango,Tiger,Saintmartin,Roast,Sky,Tree
splice library : Bangladesh,Mango,Tiger,Cox's Bazar,Keokradong,Kuakata,Saintmartin,Roast,Sky,Tree
splice library : Bangladesh,Mango,Tiger,Cox's Bazar,Keokradong,Kuakata,Saintmartin,Tree
slice library : Tiger,Cox's Bazar,Keokradong,Kuakata,Saintmartin,Tree
sort library : Bangladesh,Cox's Bazar,Keokradong,Kuakata,Mango,Saintmartin,Tiger,Tree
reverse library : Tree,Tiger,Saintmartin,Mango,Kuakata,Keokradong,Cox's Bazar,Bangladesh

Numbers : 42,8,17,99,1
ascending order : 1,8,17,42,99
descending order : 99,42,17,8,1

*/


