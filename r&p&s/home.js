var computerMove=["paper","rock","scissors"];
var playerMove=["paper","rock","scissors"];
var wins=document.getElementById("wins");
var loses=document.getElementById("loses");
var ties=document.getElementById("draws");
//function to be called when user clicks the image
//math to be used to let computer selects it's side
function myfunc(){
    var a,b,c;
    a=document.getElementById("paper");
    b=document.getElementById("rock");
    c=document.getElementById("sci");



    const comp=Math.floor(Math.random()*3);
    if(comp===0){
        computerMove="paper";
        document.getElementById("comp").value = "PAPER"; 
        console.log(computerMove);
    }else if(comp===1){
        computerMove="rock";
        console.log(computerMove);
        document.getElementById("comp").value = "ROCK"; 
    }else{
        computerMove="scissors";
        console.log(computerMove);
        document.getElementById("comp").value = "SCISSORS"; 
    
    }
    
}
function myPaper(){
        playerMove="PAPER"
        document.getElementById("move").value = "paper"
        if(computerMove==="paper"){
            console.log("you tie");
            document.getElementById("result").value = "you tie"
            ties.innerHTML++;
            
        }else if(computerMove==="rock"){
            console.log("you win");
            document.getElementById("result").value = "you win";
            wins.innerHTML++;
        }else{
            console.log("you lose");
            document.getElementById("result").value = "you lose";
            loses.innerHTML++
        }
    }
    function myRock(){
        document.getElementById("move").value = "ROCK";
        playerMove="paper";
        if(computerMove==="paper"){
            console.log("you lose");
            document.getElementById("result").value = "you lose";
            loses.innerHTML++
        }else if(computerMove==="rock"){
            console.log("you tie");
            document.getElementById("result").value = "you tie";
            ties.innerHTML++;
        }else{
            console.log("you win");
            document.getElementById("result").value = "you win";
            wins.innerHTML++
        }
    }
    function mySci(){
        playerMove="scissors";
        document.getElementById("move").value = "SCISSORS"
        if(computerMove==="paper"){
            console.log("you win");
            document.getElementById("result").value = "you win"
            wins.innerHTML++
        }else if(computerMove==="rock"){
            console.log("you lose");
            document.getElementById("result").value = "you lose"
            loses.innerHTML++
        }else{
            console.log("tie");
            document.getElementById("result").value = "you tie"
            ties.innerHTML++;
        }
    }
    //resetting the inputs and the number of wins,loses,ties
    function reset(){
        wins.innerHTML=0;
        loses.innerHTML=0;
        ties.innerHTML=0;
        document.getElementById("result").value = "";
        document.getElementById("comp").value = "";
        document.getElementById("move").value = ""
    }
   //player win or lose 
   //20 is max then after user press ok reset function is called
   function calc(){
    if(wins.innerHTML==20){
        alert("you win");
        reset();
    }else if(loses.innerHTML==20){
        alert("you lose");
    reset(); 
    }else{
        console.log("continue playing")
    }
   }