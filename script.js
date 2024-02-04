let isRunning = false;
let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startPause() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById('startPause').innerHTML = 'Resume';
    } else {
        interval = setInterval(updateStopwatch, 1000);
        document.getElementById('startPause').innerHTML = 'Pause';
    }
    isRunning = !isRunning;
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    const display = document.getElementById('display');
    display.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function lap() {
    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.innerHTML = `${lapList.childElementCount + 1}. ${display.innerText}`;
    lapList.appendChild(lapItem);
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    document.getElementById('startPause').innerHTML = 'Start';
    document.getElementById('lapList').innerHTML = '';
}
