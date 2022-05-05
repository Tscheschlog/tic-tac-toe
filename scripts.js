let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let playerTurn = true;
let turnCounter = 0;

function setBoard() {
  var table = document.getElementById("tableGameBoard");
  for (var i = 0, row; (row = table.rows[i]); i++) {
    console.log(row);

    for (var j = 0, col; (col = row.cells[j]); j++) {
      col.innerText = board[i][j];
    }
  }
}

function clearBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  playerTurn = true;
  document.getElementById("winner").innerHTML = "";
  turnCounter = 0;
  setBoard();
}

function selectSquare(row, col) {
  if (checkSquare(row, col)) return;

  if (!checkWinner()) {
    if (playerTurn) {
      board[row][col] = "X";
      setBoard();
    } else {
      board[row][col] = "O";
      setBoard();
    }

    playerTurn = !playerTurn;
  }
  checkWinner();
}

function checkSquare(row, col) {
  if (board[row][col] != "") {
    return true;
  }

  return false;
}

function checkRows() {
  for (let i = 0; i < 3; i++) {
    let target = board[i][0];

    if (target == "") continue;

    if (target == board[i][1] && target == board[i][2]) {
      document.getElementById("winner").innerHTML =
        "The Winner is " + target + "!";
      return true;
    }
  }
  return false;
}

function checkColumns() {
  for (let i = 0; i < 3; i++) {
    let target = board[0][i];

    if (target == "") continue;

    if (target == board[1][i] && target == board[2][i]) {
      document.getElementById("winner").innerHTML =
        "The Winner is " + target + "!";
      return true;
    }
  }
  return false;
}

function checkDiagonals() {
  let targetDia1 = board[0][0];
  let targetDia2 = board[0][2];

  if (targetDia1 != "") {
    if (targetDia1 == board[1][1] && targetDia1 == board[2][2]) {
      document.getElementById("winner").innerHTML =
        "The Winner is " + targetDia1 + "!";
      return true;
    }
  }

  if (targetDia2 != "") {
    if (targetDia2 == board[1][1] && targetDia2 == board[2][0]) {
      document.getElementById("winner").innerHTML =
        "The Winner is " + targetDia2 + "!";
      return true;
    }
  }

  return false;
}

function checkWinner() {
  turnCounter++;

  // Check rows
  if (checkRows()) return true;
  if (checkColumns()) return true;
  if (checkDiagonals()) return true;
  if (turnCounter == 18) {
    document.getElementById("winner").innerHTML = "DRAW!";
    return true;
  }

  console.log(turnCounter);

  return false;
}
