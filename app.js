function createElement(tag, className, innerHTML = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

function createCounterApp() {
  let counterValue = parseInt(localStorage.getItem('counterValue')) || 0;
  const appElement = document.getElementById('app');

  const counterContainer = createElement('div', 'counter-container');
  const title = createElement('h1', '', 'Counter App');
  const counterDisplay = createElement('div', 'counter-display');

  const buttonContainer = createElement('div', 'counter-buttons');
  const decreaseButton = createElement('button', 'btn-decrease', '-');
  const increaseButton = createElement('button', 'btn-increase', '+');
  const resetButton = createElement('button', 'btn-reset', 'Reset');

  buttonContainer.appendChild(decreaseButton);
  buttonContainer.appendChild(increaseButton);
  buttonContainer.appendChild(resetButton);

  counterContainer.appendChild(title);
  counterContainer.appendChild(counterDisplay);
  counterContainer.appendChild(buttonContainer);
  appElement.appendChild(counterContainer);

  const toast = createElement('div', 'toast');
  document.body.appendChild(toast);

  function updateDisplay() {
    counterDisplay.textContent = counterValue;
    counterDisplay.style.color = counterValue < 0 ? 'red' : 'white';
    localStorage.setItem('counterValue', counterValue);
    counterDisplay.classList.add('animate');
    setTimeout(() => counterDisplay.classList.remove('animate'), 150);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 1000);
  }

  buttonContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName !== 'BUTTON') return;

    if (target.classList.contains('btn-decrease')) {
      counterValue--;
      updateDisplay();
      showToast("-1");
    } else if (target.classList.contains('btn-increase')) {
      counterValue++;
      updateDisplay();
      showToast("+1");
    } else if (target.classList.contains('btn-reset')) {
      counterValue = 0;
      updateDisplay();
      showToast("Reset");
    }
  });

  updateDisplay();
}

document.addEventListener('DOMContentLoaded', createCounterApp);