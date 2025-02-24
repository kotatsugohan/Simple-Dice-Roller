function generateRandom(){
  const max = parseInt(document.getElementById("maxNumber").value);
  const resultDiv = document.getElementById("result")
  
  if (isNaN(max) || max < 1) {
    resultDiv.innerHTML = "有効な数字（1以上）を入力してください";
    return;
  }
  
  const randomNumber = Math.floor(Math.random() * max) + 1;
  resultDiv.innerHTML = `出目： ${randomNumber}`;
  addToHistory(`1-${max}: ${randomNumber}`);
}

function rollPreset(sides) {
  const resultDiv = document.getElementById("result");
  const randomNumber = Math.floor(Math.random() * sides) + 1;
  resultDiv.innerHTML = `D${sides} の出目: ${randomNumber}`;
  addToHistory(`D${sides}: ${randomNumber}`);
}

function addToHistory(result) {
  const historyList = document.getElementById("historyList");
  const historyItem = document.createElement("div");
  historyItem.textContent = result;
  historyList.insertBefore(historyItem, historyList.firstChild);
}