// Add Player
document.getElementById("add-player").addEventListener("click", function() {
  let playerName = prompt("Please enter the player name");
  if (playerName) {
    let tbody = document.querySelector("#score-table tbody");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${playerName}</td>
      <td class="total-score">0</td>
    `;
    tbody.appendChild(newRow);
  }
});

// Add Turn
let turnCount = 0;
document.getElementById("add-turn").addEventListener("click", function() {
  turnCount++;
  let theadRow = document.querySelector("#score-table thead tr");
  let newTh = document.createElement("th");
  newTh.textContent = `Turn ${turnCount}`;
  theadRow.appendChild(newTh);

  let rows = document.querySelectorAll("#score-table tbody tr");
  rows.forEach(row => {
    let newTd = document.createElement("td");
    newTd.innerHTML = `<input type="number" value="0">`;
    row.appendChild(newTd);
    newTd.querySelector("input").addEventListener("input", updateScore);
  });
});

// Update Score
function updateScore() {
  let row = this.closest("tr");
  let inputs = row.querySelectorAll("input[type='number']");
  let total = 0;
  inputs.forEach(input => {
    total += Number(input.value) || 0;
  });
  row.querySelector(".total-score").textContent = total;
}

// Reset Function (Keep Players + Confirmation)
document.getElementById("reset").addEventListener("click", function() {
  // Confirmation dialog
  let confirmReset = confirm("Are you sure you want to reset? Turns and scores will be cleared.");
  if (confirmReset) {
    // Remove turn columns from thead (everything except player name and total score)
    let theadRow = document.querySelector("#score-table thead tr");
    while (theadRow.children.length > 2) {
      theadRow.removeChild(theadRow.lastChild);
    }

    // Remove turn columns from each row and reset total score to 0
    let rows = document.querySelectorAll("#score-table tbody tr");
    rows.forEach(row => {
      // Remove everything except player name and total score
      while (row.children.length > 2) {
        row.removeChild(row.lastChild);
      }
      // Reset total score to 0
      row.querySelector(".total-score").textContent = "0";
    });

    // Reset turn count to 0
    turnCount = 0;
  }
});
