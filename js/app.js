
window.onload=function(){

console.log ("so far so good");

function newGame() { //function that creates a new game.
document.hoozTurn = "X";//starting with player X
setMessage ("<h1> Let's Play! </h1>");
}

console.log ("message should have loaded");

function setMessage(msg) {
document.getElementById("messageBox");
messageBox.innerHTML = msg;
}



function changePlayer() {
if (document.hoozTurn=="X")//checking on the condition of who just clicked, x or o
document.hoozTurn = "O"; //changed the player to O
else document.hoozTurn = "X"; //otherwise it is X's turn.
} 
  


 };