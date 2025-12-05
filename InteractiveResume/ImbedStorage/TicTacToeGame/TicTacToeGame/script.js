const board = document.getElementById("board");
const Status = document.getElementById("playerStatus");
const boardBackground = document.getElementById("gameBoardBackground")
const player1Score = document.getElementById("Box2");
const player2Score = document.getElementById("Box1");

let cells = [];
let boardState = Array(9).fill(null);
let currentPlayer = "X";
let otherPlayer = "O";
let hasWon = false;
let drawCounter = 0;

let P1Score = 0;
let P2Score = 0;

var originalColor = boardBackground.style.backgroundColor;
var originalDisplay = board.style.display;

const winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function createBoard() {
    board.innerHTML = "";
    cells = [];
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleMove, { once: true });
        board.appendChild(cell);
        cells.push(cell);
    }
}

function handleMove(event) {
    const index = event.target.dataset.index;
    console.log(index);
    if (!boardState[index]) {
        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    otherPlayer = otherPlayer === "O" ? "X" : "O";
    Status.textContent = `${currentPlayer}'s turn`;
    winCheck();

}

const winCheck = () => {
    for (let pattern of winConditions) {
        let posVal1 = cells[pattern[0]].innerText;
        let posVal2 = cells[pattern[1]].innerText;
        let posVal3 = cells[pattern[2]].innerText;

        if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "" &&
            posVal1 == posVal2 && posVal2 == posVal3) {
            Status.textContent = `Player ${otherPlayer} wins!`
            hasWon = true;

            if (hasWon = true) {
                board.style.display = "none";
                if (Status.textContent == "Player X wins!") {
                    boardBackground.style.backgroundColor = "red";
                    P1Score++;
                    player1Score.textContent = `${P1Score}`;
                }
                if (Status.textContent == "Player O wins!") {
                    boardBackground.style.backgroundColor = "blue";
                    P2Score++;
                    player2Score.textContent = `${P2Score}`; 
                }
            }
            return;

        }
        if (!hasWon) {
            console.log(drawCounter);
            drawCounter++
            if (drawCounter == 70) {
                Status.textContent = "Draw!";
            }
        };
    }
}


function resetGame() {
    boardState = Array(9).fill(null);
    currentPlayer = "X";
    otherPlayer = "O";
    hasWon = false;
    drawCounter = 0;
    board.style.display = originalDisplay;
    boardBackground.style.backgroundColor = originalColor;
    createBoard();

}


createBoard();