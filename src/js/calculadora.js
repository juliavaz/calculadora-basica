document.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded');

  // here goes the logical
});

let press = (key) => {
  if (typeof(key) === 'number') {
    updateDisplay(key, false);
  } else {
    switch (key) {
      case 'clear':
        clearDisplay();
    }
  }
}

let updateDisplay = (newText, clear) => {
  let display = document.getElementById('display');
  if (clear === true) {
    display.innerText = newText;
  } else {
    display.innerText = display.innerText += newText;
  }
}

let clearDisplay = () => {
  let display = document.getElementById('display');
  display.innerText = '';
}