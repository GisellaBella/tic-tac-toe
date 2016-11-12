
window.onload=function(){

  console.log ("so far so good");

  //var test = document.getElementById("messageBox");
  //test.textContent = "testing"; //testing to make sure my div are being called.

  function newGame() { //function that creates a new game.
    document.hoozTurn = "X";//starting with player X
    setMessage ("<h1> Let's Play! </h1>");
  }

  function setMessage(msg) {
    document.getElementById("messageBox");
    messageBox.textContent = msg;
  }

  function changePlayer() {
    if (document.hoozTurn=="X")//checking on the condition of who just clicked, x or o
    {document.hoozTurn = "O";
    } //changed the player to O
    else {
    document.hoozTurn = "X";
    } //otherwise it is X's turn.
  }

  function nextMv(square, hoozTurn){ //unsure if i add the onclick thing here or in html. Confusing info on the interwebs.
    square.innerText = document.hoozTurn;
  }

};
