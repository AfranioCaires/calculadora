const displayResult = document.getElementById("displayResult");
const operations = ["+", "-", "*", "/", "%"];

function append(value) {
  const lastChar = displayResult.value.slice(-1);
  if (displayResult.value === "Erro") clearDisplay();
  if (operations.includes(lastChar) && operations.includes(value)) {
    displayResult.value = displayResult.value.slice(0, -1) + value;
  } else if (!operations.includes(lastChar) || !operations.includes(value)) {
    displayResult.value += value;
  }
}
function clearDisplay() {
  displayResult.value = "";
}

function calculate() {
  try {
    displayResult.value = eval(displayResult.value).toFixed(5);
    if (displayResult.value === "Infinity") throw new Error("Divisão por zero");
    if (isNaN(displayResult.value)) throw new Error("Erro de operação");
  } catch (err) {
    displayResult.value = "Erro";
  }
}
