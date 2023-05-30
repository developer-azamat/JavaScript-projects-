let playerText = document.querySelector("#playerText");
let restartBtn = document.querySelector("#restartBtn");
let boxes = document.querySelectorAll(".box");

let winningIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);

const X_TEXT = "X";
const O_TEXT = "O";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => {
    box.addEventListener("click", boxClicked);
  });
};

function boxClicked({ target }) {
  const id = target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    target.textContent = currentPlayer;

    if (playerHasWon() !== false) {
      let winning_blocks = playerHasWon();

      if (winning_blocks) {
        playerText.innerHTML = `${currentPlayer} has won !`;
        winning_blocks.map(
          (box) => (boxes[box].style.backgroundColor = winningIndicator)
        );
        document.getElementById("gameboard").style.display = "none";
      }
    }

    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
  }
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c];
    }
  }
}

restartBtn.addEventListener("click", restartGame);

function restartGame() {
  spaces.fill(null);

  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.backgroundColor = "";
  });

  playerText.innerHTML = "Tic Tac Toe";

  currentPlayer = X_TEXT;
  document.getElementById("gameboard").style.display = "flex";
}

startGame();
