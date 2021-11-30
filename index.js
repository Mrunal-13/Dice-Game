


//document.querySelector("h1").innerHTML="Refresh Me"

var randomnumber1=Math.floor(Math.random()*6)+1;//1-6

console.log(randomnumber1)


var randomnumber2=Math.floor(Math.random()*6)+1;//1-6

console.log(randomnumber2)

function play(){
    if(randomnumber1>randomnumber2){
        var randomdiceimage1="dice"+randomnumber1+".png";
        var randomimage1="images/"+randomdiceimage1;//images/dice1.png - images/dice6.png
        var image1=document.querySelectorAll("img")[0];
        image1.setAttribute("src",randomimage1);
        var randomdiceimage2="dice"+randomnumber2+".png";
        var randomimage2="images/"+randomdiceimage2;//images/dice1.png - images/dice6.png
        var image2=document.querySelectorAll("img")[1];
        image2.setAttribute("src",randomimage2);

        document.querySelector("h1").innerHTML="congrats! player1 Wins";
    }
    else if(randomnumber1<randomnumber2)
    
    {
        var randomdiceimage1="dice"+randomnumber1+".png";
        var randomimage1="images/"+randomdiceimage1;//images/dice1.png - images/dice6.png
        var image1=document.querySelectorAll("img")[0];
        image1.setAttribute("src",randomimage1);
        var randomdiceimage2="dice"+randomnumber2+".png";
        var randomimage2="images/"+randomdiceimage2;//images/dice1.png - images/dice6.png
        var image2=document.querySelectorAll("img")[1];

        image2.setAttribute("src",randomimage2);
        document.querySelector("h1").innerHTML="Player 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="Draw !"
    }
}