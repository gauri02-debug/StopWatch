// Select the necessary elements
const timerDisplay = document.getElementById('timer-display');
const startButton = document.querySelector('#buttons button:nth-child(1)');
const stopButton = document.querySelector('#buttons button:nth-child(2)');
const resetButton = document.querySelector('#buttons button:nth-child(3)');

let timerInterval;
let elapsedTime = 0;
let isRunning = false;

// Function to format the time (mm:ss)
function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// Function to start the stopwatch
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      elapsedTime++;
      timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
  }
}

// Function to stop the stopwatch
function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
}

// Function to reset the stopwatch
function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  timerDisplay.textContent = formatTime(elapsedTime);
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
