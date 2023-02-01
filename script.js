
allTiles = document.querySelectorAll(".tiles"); //selects all elements with .tile class.
errorOutput = document.querySelector(".js-code-output-container");


function ClickMe(gridSquare){ //STARTS ON CLICK.
  console.log(gridSquare);
  mainGameFunction(gridSquare);
}
////////////////////////////////////MAIN FUNCTION///////////////////////////////////////////////
function mainGameFunction(gridSquare){
  const GetChoice = Turncounter.getPlayer();
  if (GetChoice === "player"){
    if (gridSquare == undefined){ //prevents function letting computer go after winning turn.
      return;
    }
    playerChoice(gridSquare);
    Turncounter.setPlayer("computer");
    checkForWinner();
    mainGameFunction();
  }
  else if (GetChoice === "computer") {
    console.log("puter");
    {computerChoice(); drawBoard(); checkForWinner();}; //small delay.
  }  
  drawBoard();
}
////////////////////////////////////MAIN FUNCTION///////////////////////////////////////////////

/////////////////////////////// TURN COUNTER //////////////////////////////
const Turncounter = (() =>{
  let turn = "player";

  const setPlayer = (entity) => {
    turn = entity;
  }

  const getPlayer = () => {
    return turn;
  }
  return {
    setPlayer, 
    getPlayer
  };
})();//()
/////////////////////////////// TURN COUNTER //////////////////////////////

////////////////////////////////////GAMEBOARD///////////////////////////////////////////////////
const Gameboard = (()=>{
  const board = new Array(9).fill(''); //fill initial array with ''

  const setCell = (index, value) => {
    board[index] = value;
  }
  const resetBoard = () => { //resets array
    for (let i = 0; i <= 8; i++){
      board[i] = '';
    }

  } //prints a copy of the board, which can be modified.
  const getBoard = () => { 
    return board;
  }

  return { //returns functions.
    setCell,
    getBoard,
    resetBoard
  }
})();  //() required for module.
////////////////////////////////////GAMEBOARD///////////////////////////////////////////////////


/////////////////////////////// COMPUTER SELECTION //////////////////////////////
function computerChoice(){
  const array = Gameboard.getBoard();
  let array2 = [];
  const resultThatDoesntHelpAtAll = array.filter(function(elem, index){
    if (elem === '') {
      array2.push(index);
      return;
    }
});
  let indexValue = array2[Math.floor(Math.random()*array2.length)];// gets index of move to make
  Gameboard.setCell(indexValue, 'O');
  drawBoard();
  Turncounter.setPlayer("player");
  // return (indexValue);
}
/////////////////////////////// COMPUTER SELECTION //////////////////////////////

/////////////////////////////// PLAYER SELECTION ///////////////////////////////////////////////
function playerChoice(gridSquare){
  const array = Gameboard.getBoard();
  if (array[gridSquare] === ''){
    Gameboard.setCell(gridSquare, 'X');
    return;
  }
  else{
    console.log("error, already selected by someone");
    return;
  } 

}
/////////////////////////////// PLAYER SELECTION ///////////////////////////////////////////////


/////////////////////////EVENT LISTENER FOR TILES ///////////////////////////////
allTiles.forEach(clickedTile => { //clickedTile = each element.
  clickedTile.addEventListener('click', () => {
    if(clickedTile.innerText === ""){
      errorOutput.innerText = ""
      ClickMe(clickedTile.id); //sends element.id="" to function.
    }
    else errorOutput.innerText = "That move has already been made";
  })
});

function resetAll(){
  Gameboard.resetBoard();
  drawBoard();
}
/////////////////////////EVENT LISTENER FOR TILES ///////////////////////////////

/////////////////////////////// DRAWS TILES  ///////////////////////////////////////////////////
function drawBoard(){ //draws board
  const array = Gameboard.getBoard();
  let i = 0;
  allTiles.forEach(tileElement => { //for each tile element add array element.    
    tileElement.innerText = array[i];
    i++;    
  })
}
/////////////////////////////// DRAWS TILES  ///////////////////////////////////////////////////

/////////////////////////   CHECK FOR A WINNER    ///////////////////////////////
function checkForWinner(){

  const winnerDeclare = (winner) => {
    errorOutput.innerText = winner;
    Turncounter.setPlayer("player");
    Gameboard.resetBoard();
    drawBoard();    
    TestmeArray = [];
  }
  const winChk =[
    [0,1,2],
    [3,4,5],
    [6,7,8],  
    [0,3,6],
    [1,4,7],
    [2,5,8],  
    [0,4,8],
    [6,4,2],  
  ]
  let newMe = []
  let TestmeArray = [];  
  const gameBoard = Gameboard.getBoard();
  for (item in winChk){
    for (index in winChk[item]){
      TestmeArray.push(gameBoard[winChk[item][index]]);
    }
    // console.log(TestmeArray);
    if (TestmeArray.join('') === 'XXX'){
      winnerDeclare("You Won!")

    }
    if (TestmeArray.join('') === 'OOO'){
      winnerDeclare("Computer Wins... somehow?");
    }
    TestmeArray = [];


    //if (TestmeArray.join()
  }
  return //
}

/////////////////////////   CHECK FOR A WINNER    ///////////////////////////////



// console.log(Turncounter.getPlayer(), "one");
// console.log(Turncounter.getPlayer(), "one");
// Turncounter.setPlayer("computer");
// console.log(Turncounter.getPlayer(), "two");
// console.log(Gameboard);






// console.log(Gameboard.getBoard())
// Gameboard.setCell(1,1);
// console.log(Gameboard.getBoard());
// Gameboard.setCell(2,2);
// console.log(Gameboard.getBoard());
// for (let i = 0; i <= 8; i++){
//   Gameboard.setCell(i,i);
// }
// // Gameboard.resetBoard();
// console.log("test");
// console.log(Gameboard.getBoard(), "test");//














