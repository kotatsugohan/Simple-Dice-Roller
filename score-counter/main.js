// プレイヤー追加
document.getElementById("add-player").addEventListener("click", function() {
  let playerName = prompt("プレイヤー名を入力してください");
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

// ターン追加
let turnCount = 0;
document.getElementById("add-turn").addEventListener("click", function() {
  turnCount++;
  let theadRow = document.querySelector("#score-table thead tr");
  let newTh = document.createElement("th");
  newTh.textContent = `${turnCount}ターン目`;
  theadRow.appendChild(newTh);

  let rows = document.querySelectorAll("#score-table tbody tr");
  rows.forEach(row => {
    let newTd = document.createElement("td");
    newTd.innerHTML = `<input type="number" value="0">`;
    row.appendChild(newTd);
    newTd.querySelector("input").addEventListener("input", updateScore);
  });
});

// スコア更新
function updateScore() {
  let row = this.closest("tr");
  let inputs = row.querySelectorAll("input[type='number']");
  let total = 0;
  inputs.forEach(input => {
    total += Number(input.value) || 0;
  });
  row.querySelector(".total-score").textContent = total;
}

// リセット機能（プレイヤー残し＋確認付き）
document.getElementById("reset").addEventListener("click", function() {
  // 確認ダイアログ
  let confirmReset = confirm("本当にリセットしますか？ターンとスコアが消えます。");
  if (confirmReset) {
    // theadからターン列を削除（プレイヤー名と総合得点以外）
    let theadRow = document.querySelector("#score-table thead tr");
    while (theadRow.children.length > 2) {
      theadRow.removeChild(theadRow.lastChild);
    }

    // 各行のターン列を削除し、総合得点を0に
    let rows = document.querySelectorAll("#score-table tbody tr");
    rows.forEach(row => {
      // プレイヤー名と総合得点以外を削除
      while (row.children.length > 2) {
        row.removeChild(row.lastChild);
      }
      // 総合得点を0にリセット
      row.querySelector(".total-score").textContent = "0";
    });

    // ターン数を0に
    turnCount = 0;
  }
});