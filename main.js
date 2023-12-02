const displayResult = document.getElementById("displayResult");
const operations = ["+", "-", "*", "/", "/100"];

function append(value) {
  const lastChar = displayResult.value.slice(-1);
  if (displayResult.value === "erro") clearDisplay();
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
    Number.isInteger(eval(displayResult.value))
      ? (displayResult.value = eval(displayResult.value))
      : (displayResult.value = eval(displayResult.value).toFixed(5));

    if (displayResult.value === "Infinity") throw new Error("Divsion by 0");
    if (isNaN(displayResult.value)) throw new Error("Invalid operation");
  } catch (err) {
    displayResult.value = "erro";
  }
}
