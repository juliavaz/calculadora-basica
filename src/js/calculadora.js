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
