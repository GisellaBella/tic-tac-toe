
document.onload = newGame();

function newGame() //creates a new game.
    { document.whoTurn = "X";//starting with player X
      setMessage(document.whoTurn + "Let's Play!");
    }
var message = function (setMessage) {
  document.getElementById("messageBox").innerText = messagE;
  //function to display message to player using div id prompt
};

function nextMv(square){
  square.innerText = document.whoTurn; //creates the clickable box showing X for first turn
  changePlayer();
}

function changePlayer (){
  if (document.whoTurn=="X")//checking on the condition of whoTurn
  { document.whoTurn = "O"; //changed the player to O
  } else { document.whoTurn = "X"; //otherwise it is X's turn.
  }
 setMessage ( "Back to " + document.whoTurn);
 } 

 function changePlayer(){
  if (checkForWinner(document.whoTurn)){
    setMessage ("Congrats, you brainiac, you won!");
    document.winner = document.whoTurn;
  }
  else if ()
  }
 }      



console.log ("so far so good");



  /*

/*
/* MY PSUEDO CODE:

we have 9 cells (divs)
we add event listeners to each div.
when a div is clicked it adds the div's preset value (from 1-9 to current player's array) 
    game board with preset values
      123
      456
      789

if this array matches a winning array set, the user gets an alert that either 
they won or it is the others players move.

123     
456
789

so, for example, If the same player controls cells 1,2,3, that player gets an alert that either 
they won
the game is over (no more winning moves)
or it the others players move.

winningCombos =
   new Array(1,2,3),
   new Array(4,5,6),
   new Array(7,8,9),
   new Array(1, 4, 7),
   new Array(2, 5, 8),
   new Array(3,6,9),
   new Array(1.5.9),
   new Array(3,5,7)

if the total cells played array's  length % 2- move goes to the 'O' Player's array. else it will be X.

var newGame = ();//create new board{
   onclick.};
var start = document.createElement('div');

start.setAttribute('id', ’turn’);}


var gameState = function (arrayOne, arrayTwo) {
/* to be calculated comparing the current players array state against the winning combos.
 If there's a match, game over.
};
var arrayOne = ();
var arrayTwo = ();


var player1Selections = arrayOne[];
var player2Selections = arrayTwo[];

var currentPlayer= function(){
if (totalArray.length % 2  == 0) {
      /* then currentPlayer marks a O;}
  else currentPlayer marks an X }      

        
function newGame() 


turn.addEventListener('click', markX);

start.appendChild(turn);
var markX = function (currentPlayer,adds cell value to array?)*/
