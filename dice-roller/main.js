function generateRandom(){
  const max = parseInt(document.getElementById("maxNumber").value);
  const resultDiv = document.getElementById("result");
  
  if (isNaN(max) || max < 1) {
    resultDiv.innerHTML = "Please enter a valid number (1 or greater)";
    return;
  }
  
  const randomNumber = Math.floor(Math.random() * max) + 1;
  resultDiv.innerHTML = `Result: ${randomNumber}`;
  addToHistory(`1-${max}: ${randomNumber}`);
}

function rollPreset(sides) {
  const resultDiv = document.getElementById("result");
  const randomNumber = Math.floor(Math.random() * sides) + 1;
  resultDiv.innerHTML = `D${sides} result: ${randomNumber}`;
  addToHistory(`D${sides}: ${randomNumber}`);
}

function addToHistory(result) {
  const historyList = document.getElementById("historyList");
  const historyItem = document.createElement("div");
  historyItem.textContent = result;
  historyList.insertBefore(historyItem, historyList.firstChild);
}
