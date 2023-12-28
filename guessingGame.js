var i,num,randomNum,matchNum=0,unmatchNum=0;

for(i=1;i<6;i++)

{

num=parseInt(prompt("Enter num from 1 to 5 : "));

randomNum=Math.floor(Math.random() * 6);

if(num==randomNum)

{

        document.write("You have won <br>");

        matchNum++;

}

else 

{

        document.write("You have lost <br>");
        
        unmatchNum++

}

}

document.write("<br><br><br>");

document.write("You total won : " +matchNum + "<br/>");

document.write("You total lost : "+unmatchNum);







