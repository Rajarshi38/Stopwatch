const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const timer = document.querySelector(".timer");

let elapsedTime = 0;
let startTime;
let timeInterval;

function filterTime(time) {
  let diffhr = time / 3600000;
  let hh = Math.floor(diffhr);

  let diffmin = (diffhr - hh) * 60;
  let mm = Math.floor(diffmin);

  let diffsec = (diffmin - mm) * 60;
  let ss = Math.floor(diffsec);

  let diffms = (diffsec - ss) * 100;
  let ms = Math.floor(diffms);

  let formattedmm = mm.toString().padStart(2, "0");
  let formattedss = ss.toString().padStart(2, "0");
  let formattedms = ms.toString().padStart(2, "0");

  return `${formattedmm}:${formattedss}:${formattedms}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.innerHTML = filterTime(elapsedTime);
  }, 10);
}

function stop() {
  clearInterval(timeInterval);
}

function reset() {
  clearInterval(timeInterval);
  timer.innerHTML = `00:00:00`;
  elapsedTime = 0;
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
