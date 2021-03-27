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
  let code = event.keyCode;
  let char = String.fromCharCode(code);
  
  if(char == "0"){   
    press(char, false);
  } else if (char == "1" || code == 49) {
    press(char, false);
  } else if (char == "2" || code == 50) {
    press(char, false);
  } else if (char == "3" || code == 51) {
    press(char, false);
  } else if (char == "4" || code == 52) {
    press(char, false);
  } else if (char == "5" || code == 53) {
    press(char, false);
  } else if (char == "6" || code == 54) {
    press(char, false);
  } else if (char == "7" || code == 55) {
    press(char, false);
  } else if (char == "8" || code == 56) {
    press(char, false);
  } else if (char == "9" || code == 57) {
    press(char, false);
  } else if (char == "*" || code == 42) {
    press(char, false);
  } else if (char == "+" || code == 43 ) {
    press(char, false);
  } else if (char == "-" || code == 45) {
    press(char, false);
  } else if (char == "." || code == 46) {
    press(char, false);
  } else if (char == "/" || code == 47) {
    press(char, false);
  } else if (char == "=" || code == 61) {
    press(char, false);
  } else if (char == "Backspace" || code == 8) {
    press("clear" , false);
  } else if (char == "Enter" || code == 13) {
    press("=", false);
  } else {
    display.innerText = display.innerText += key;
  }
}
document.addEventListener("keypress", addKey);
