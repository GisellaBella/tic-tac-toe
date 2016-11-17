
window.onload=function(){


function newGame() { //function that creates a new game.
setMessage ("<h1> Let's Play! </h1>");
}

newGame();


var msg;
function setMessage(msg) {
  document.getElementById("messageBox");
  messageBox.innerHTML = msg;
}

var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function testFunction() {
    console.log("Hello World");
}

var squares = document.getElementsByClassName('square');
var inPlayArray= []; //squares that have been played.


function squareListener (){ 
     console.log("squareListener");// adding the event listener for someone clicking on a square
     for (var i = 0; i <=squares.length-1; i++ ) {
     squares[i].addEventListener('click', setSquare);
     }

/*function chunkIntoGroupsOfThree(inPlayArray) { //trying to chunk the array in order of click to groups of three
  var results = [];
  length = function (){
    Math.ceil(inPlayArray.length / 3);
    };
    for (var i = 0; i < length; i++) {
    results.push(inPlayArray.slice(i * 3, (i + 1) * 3));
    }
    return results;
  }
  */ ///no worky...


/*function chunkIntoGroupsOfThree (inPlayArray){
  for (var i=0; i<inPlayArray.length; i+=3) {
    var smallarray = inPlayArray.slice(i,i+size);//do i need to do something with smallarray too?
    }
   } 

chunkIntoGroupsOfThree();
console.log (chunkIntoGroupsOfThree);
  */
  //throwing in the towel, will revisit when i get better at this stuff.

squareListener();


function setSquare (event)   {//setting the square to X or O, depending on what is in or not in the box.
   console.log("setSquare");
    if (inPlayArray.length === 0) { //no one has made a move yet.
    inPlayArray.push(event.target.id); //collecting to inPlayArray
    event.target.innerHTML = "<h2> X </h2"; //x always goes first
  }
   
  else if ( inPlayArray.length === 1 || 
            inPlayArray.length === 3 || 
            inPlayArray.length === 5 || 
            inPlayArray.length === 7 ) {
    inPlayArray.push(event.target.id);  ////collecting to inPlayArray
    event.target.innerHTML = "<h2> O </h2>";
    console.log (inPlayArray);
    checkForWin();
    }

  else if (inPlayArray.length % 2 === 0){
    inPlayArray.push(event.target.id);  ////collecting to inPlayArray
    event.target.innerHTML = "<h2> X </h2>";
    console.log (inPlayArray);
    checkForWin();
    }
}

/*function checkForWin (){
    for (i=0;i<=winningCombinations.length-1; i++) 
      if ( winningCombinations[i] == (inPlayArray[0] && inPlayArray[1] && inPlayArray[2]) || 
           winningCombinations[i] == (inPlayArray[3] && inPlayArray[4] && inPlayArray[5]) ||
           winningCombinations[i] == (inPlayArray[6] && inPlayArray[7] && inPlayArray[8]) )

      setMessage ("We have a winner!");
      else if (event.target.innerHTML == "O") {
      setMessage ("<h2> It's X's Move </h2");
      }
      else if (event.target.innerHTML == "X") {
      setMessage ("<h2> It's O's Move </h2");
      }
    }
*/
  }  
  };