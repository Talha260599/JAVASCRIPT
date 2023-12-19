var i,j;

for(i=0;i<=5;i++)
{

    document.write("<b> Out Loop : </b> "+i+"<br/>");

    for(j=0;j<5;j++)
    {
        document.write("Inner Loop : "+j+"<br/>");
    }

}


/*
Output :


Out Loop : 0
Inner Loop : 0
Inner Loop : 1
Inner Loop : 2
Inner Loop : 3
Inner Loop : 4
Out Loop : 1
Inner Loop : 0
Inner Loop : 1
Inner Loop : 2
Inner Loop : 3
Inner Loop : 4
Out Loop : 2
Inner Loop : 0
Inner Loop : 1
Inner Loop : 2
Inner Loop : 3
Inner Loop : 4
Out Loop : 3
Inner Loop : 0
Inner Loop : 1
Inner Loop : 2
Inner Loop : 3
Inner Loop : 4
Out Loop : 4
Inner Loop : 0
Inner Loop : 1
Inner Loop : 2
Inner Loop : 3
Inner Loop : 4
Out Loop : 5
Inner Loop : 0
Inner Loop : 1
Inner Loop : 2
Inner Loop : 3
Inner Loop : 4


*/