
window.onload=function(){

  //var test = document.getElementById("messageBox");
  //test.textContent = "testing"; //testing to make sure my div are being called.

function newGame() { //function that creates a new game.
var Turn = "X";//starting with player X, Who's turn is it, X or O
setMessage ("<h1> Let's Play! </h1>");
}

newGame();

var msg;
function setMessage(msg) {
document.getElementById("messageBox");
messageBox.innerHTML = msg;
  }

var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var squares = document.getElementsByTagName('td');
var xSquares= []; //X's click box ID's
var oSquares= []; //O's Click box ID's

var squaresArray= [];//do i want one array for everything, or one for X and one for O?

function squareListener (){ // adding the event listener for someone clicking on a square
  for (var i = squares.length-1; i >= 0;i-- )
  {squares[i].addEventListener('click', setSquare);
  }}

function setSquare (event) {//setting the square to X or O, depending on what is in or not in the box.
if (oSquares.length || xSquares.length === 0) //no one has made a move yet.
{xSquares.push(event.target.id); //collecting to xSquareres array ID value
event.target.innerHTML = "<h2> X </h2";} //x always goes first

{oSquares.push(event.target.id);  ////collecting to OSquareres array ID value
     event.target.innerHTML = "<h2> O </h2>";}

checkForWin(oSquares);
setMessage ("<h1>O wins!</h1>");
}


  function checkForWin (winningCombinations){
    for (i=0;i<=winningCombinations.length; i++) {
      if winningCombinations[i]==(oSquares.toString());
    }}
    setMessage (We have a winner!);}
    
};