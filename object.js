var name,id,age,lang;


/*
constructor
constructor is a special type of function.that helps to create template
*/
function Student(name,id,age,lang)
{
     
    this.name=name;
    this.id=id;
    this.age=age;
    this.lang=lang;

    //adding function inside constructor

       this.display= function()
       {
           
          document.write(this.name,"<br>");
          document.write(this.id,"<br>");
          document.write(this.age,"<br>");
          document.write(this.lang,"<br>");
          document.write("<br><br>");


       }

}


var student1=new Student("Talha",101,24,["ban","eng","hindi","C"]);
var student2=new Student("Ranan",168,24,["ban","eng","hindi","Python"]);
var student3=new Student("Jibon",69,24,["ban","eng","hindi","Javascript"]);

document.write(student1.name,"<br>");
document.write(student1.id,"<br>");
document.write(student1.lang,"<br>");
document.write(student1.age,"<br><br>");


student2.display();

student3.display();



/*
//How to create an object
var student1 ={
   name : "Talha",
   id : 101,
   age : 24,
   lang : ["ban","eng","hindi","C"]
};


//How to create an object
var student2 ={
    name : "Ranan",
    id : 168,
    age : 24,
    lang : ["ban","eng","hindi","Python"]
};


//How to create an object
var student3 ={

      name : "Jibon",
      id : 69,
      age : 24,
      lang : ["ban","eng","hindi","Java"]

};


document.write(student1.id,"<br>");
document.write(student2.lang,"<br>");
document.write(student3.age,"<br>");

*/



