

function highestScore(scores)
{

    var max=scores[0];

for (i = 1; i < scores.length; i++) 
{
   if(scores[i]>max)
{
    max=scores[i];
    
}

}

return max;



}


var scores=new Array();

var i;




for(i=0;i<6;i++)
{

    scores[i]=parseFloat(prompt("Enter Scores : "));

    document.write(scores[i]+"<br/>");

}

document.write ("Max Number Is : " +highestScore(scores));






