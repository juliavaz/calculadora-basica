let expression = '';
let history = '';

let press = (key) => {
  if (key === '=') {
    let result = mexp.eval(expression);
    updateDisplay(result, true);
    updateHistory(expression, `${expression} = ${result}`);
    expression = result;
  } else if (key === 'clear') {
    clearDisplay();
  } else {
    expression += '' + key;
    updateDisplay(key, false);
  }
};

let updateHistory = (expression, expressionResult) => {
  history +=
    `<div class="history-block" onclick="loadHistory('${expression}')">${expressionResult}</div>` +
    '<br>';
  let domHistory = document.getElementById('historicoExpressoes');
  domHistory.innerHTML = history;
};

let updateDisplay = (newText, clear) => {
  let display = document.getElementById('display');
  if (clear === true) {
    display.innerText = '';
    display.innerText = newText;
  } else {
    display.innerText = display.innerText += newText;
  }
};

let clearDisplay = () => {
  expression = '';
  updateDisplay(expression, true);
};

let loadHistory = (exp) => {
  expression = exp;
  updateDisplay(exp, true);
};

let addKey  = (event) => {  
  let display = document.getElementById('display');
  let char = String.fromCharCode(event.keyCode);

  if(char == "0"){   
    press(char, false);
  } else if (char == "1") {
    press(char, false);
  } else if (char == "2") {
    press(char, false);
  } else if (char == "3") {
    press(char, false);
  } else if (char == "4") {
    press(char, false);
  } else if (char == "5") {
    press(char, false);
  } else if (char == "6") {
    press(char, false);
  } else if (char == "7") {
    press(char, false);
  } else if (char == "8") {
    press(char, false);
  } else if (char == "9") {
    press(char, false);
  } else if (char == "*") {
    press(char, false);
  } else if (char == "+" ) {
    press(char, false);
  } else if (char == "-") {
    press(char, false);
  } else if (char == ".") {
    press(char, false);
  } else if (char == "/") {
    press(char, false);
  } else if (char == "=") {
    press(char, false);
  } else if (char == "c") {
    press("clear" , false);
  } else if (char == "Enter") {
    press("=", false);
  } 
}
document.addEventListener("keypress", addKey);
