let expression = '';

let press = (key) => {
  if (key === '=') {
    let result = mexp.eval(expression);
    updateDisplay(result, true);
  } else if (key === 'clear') {
    clearDisplay();
  }
   else {
    expression += '' + key;
    updateDisplay(key, false);
  }
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