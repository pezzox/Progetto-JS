// Main function that creates and initializes the counter interface
function createCounterApp() {
  // Retrieves the value saved in localStorage or sets it to 0
  let counterValue = parseInt(localStorage.getItem('counterValue')) || 0;

  // Selects the HTML element with id "app" where the interface will be inserted
  const appElement = document.getElementById('app');

  // Creates the main container of the counter
  const counterContainer = document.createElement('div');
  counterContainer.className = 'counter-container';

  // Creates and inserts the title of the app
  const title = document.createElement('h1');
  title.textContent = 'Counter App';

  // Creates the element that displays the current counter value
  const counterDisplay = document.createElement('div');
  counterDisplay.className = 'counter-display';

  // Function to update the displayed counter value
  function updateDisplay() {
    counterDisplay.textContent = counterValue; // Displays the current value
    counterDisplay.style.color = counterValue < 0 ? 'red' : 'white'; // Changes color if the number is negative
    localStorage.setItem('counterValue', counterValue); // Saves the value in localStorage
    // Adds a light animation every time the number changes
    counterDisplay.classList.add('animate');
    setTimeout(() => counterDisplay.classList.remove('animate'), 150);
  }

  // Displays the initial value at startup
  updateDisplay();

  // Creates the container for the buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'counter-buttons';

  // Creates the button to decrease the value
  const decreaseButton = document.createElement('button');
  decreaseButton.className = 'btn-decrease';
  decreaseButton.textContent = '-';
  decreaseButton.addEventListener('click', function() {
    counterValue--;           // Decreases the value
    updateDisplay();          // Updates the display
    showToast("-1");          // Displays a temporary message
  });

  // Creates the button to increase the value
  const increaseButton = document.createElement('button');
  increaseButton.className = 'btn-increase';
  increaseButton.textContent = '+';
  increaseButton.addEventListener('click', function() {
    counterValue++;           // Increases the value
    updateDisplay();          // Updates the display
    showToast("+1");          // Displays a temporary message
  });

  // Creates the button to reset the value to 0
  const resetButton = document.createElement('button');
  resetButton.className = 'btn-reset';
  resetButton.textContent = 'Reset';
  resetButton.addEventListener('click', function() {
    counterValue = 0;         // Resets the counter
    updateDisplay();          // Updates the display
    showToast("Reset");       // Displays a temporary message
  });

  // Creates Toast 
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.padding = '10px 20px';
  toast.style.backgroundColor = '#000';
  toast.style.color = '#fff';
  toast.style.borderRadius = '8px';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(toast);

  // Function to display the temporary message
  function showToast(message) {
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 1000); 
  }

  // Adds the buttons to the container
  buttonContainer.appendChild(decreaseButton);
  buttonContainer.appendChild(increaseButton);
  buttonContainer.appendChild(resetButton);

  // Adds title, display, and buttons to the main container
  counterContainer.appendChild(title);
  counterContainer.appendChild(counterDisplay);
  counterContainer.appendChild(buttonContainer);

  // Inserts everything into the page's "app" element
  appElement.appendChild(counterContainer);
}

// When the page is fully loaded, executes the main function
document.addEventListener('DOMContentLoaded', createCounterApp);
