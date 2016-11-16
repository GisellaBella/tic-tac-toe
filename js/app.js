
window.onload=function(){

  //var test = document.getElementById("messageBox");
  //test.textContent = "testing"; //testing to make sure my div are being called.

function newGame() { //function that creates a new game.
setMessage ("<h1> Let's Play! </h1>");
}

newGame();

var msg;
function setMessage(msg) {
  document.getElementById("messageBox");
  messageBox.innerHTML = msg;
}

var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

var squares = document.getElementsByTagName('td');

var inPlayArray= []; //squares that have been played.

function squareListener (){ // adding the event listener for someone clicking on a square
  for (var i = squares.length-1; i >= 0;i-- ) {
    squares[i].addEventListener('click', setSquare);
  }
}

function setSquare (event) {  //setting the square to X or O, depending on what is in or not in the box.
  if (inPlayArray.length === 0) { //no one has made a move yet.
    inPlayArray.push(event.target.id); //collecting to inPlayArray
    event.target.innerHTML = "<h2> X </h2";
    Console.log(inPlayArray);
  }
    //x always goes first
  /*} else if (inPlayArray.length === 1 || 3 || 5 || 7) {
    inPlayArray.push(event.target.id);  ////collecting to inPlayArray
    event.target.innerHTML = "<h2> O </h2>";
    checkForWin(inPlayArray);
  }
}

function checkForWin (winningCombinations){
    for (i=0;i<=winningCombinations.length; i++) 
      if (winningCombinations[i]==(inPlayArray.toString)) {
      setMessage ("We have a winner!");
    }
    else if (event.target.innerHTML === "O") {
      setMessage ("<h2> It's X's Move </h2");
    }
    else if(event.target.innerHTML === "X") {
      setMessage ("<h2> It's O's Move </h2");

    }
*/
}


}