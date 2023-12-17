/*

• Create a function called highestRunScorer that will
• Receive a 2d array called playersinfo
• Based on highest score, return the name of the player

*/



function highestRunScorer(playersInfo)
{

var highestscorer = playersInfo[0][0];
var highestscore = playersInfo[0][1];


for(i=1;i<playersInfo.length;i++)
{
       
     if(playersInfo[i][1]>highestscore)
        
        {
            
            highestscore=playersInfo[i][1];
            highestscorer=playersInfo[i][0];



        }


}

               return highestscorer;

}


var playersInfo=[
          
                  ["MSD",183],
                  ["ABD",51],
                  ["VK",53],
                  ["KP",48],
                  ["MASH",21]
],i,j;

console.log(highestRunScorer(playersInfo));



/*

OUTPUT :

MSD

*/







