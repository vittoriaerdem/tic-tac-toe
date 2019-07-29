/*----- constants -----*/ 
const xPlayer = 'X';
const oPlayer = 'O'
const winningMoves = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 4, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 4, 6]
    [2, 5, 8]
];
const grid = document.querySelectorAll('.space');
const space = document.querySelectorAll('.space');

/*----- app's state (variables) -----*/ 
var board;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 

/*----- functions -----*/
function startGame () {
    document.querySelector(".endgame").style.display = "none"
    board = Array.from(Array(9).keys());
    for (var i = 0; i < space.length; i++) {
    space[i].innerText = '';
    space[i].addEventListener('click', turnClick, false)
    }
}
startGame();

function turnClick(square) {
    console.log(square.target.id)
}

