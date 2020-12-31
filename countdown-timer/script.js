const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  //7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
  //const currentDate = new Date(2020, 11, 31, 12, 59, 59, 0);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//initial call
countdown();

setInterval(countdown, 1000);
// Jojo theme
var myMusic = document.getElementById("music");
function playjojo() {
  myMusic.muted = true;
  myMusic.play();
  myMusic.muted = false;
  myMusic.play();
}

//Blue Wednesday introvert song 
var myMusic = document.getElementById("music2");
function play() {
  myMusic.muted = true;
  myMusic.play();
  myMusic.muted = false;
  myMusic.play();
}

function yourFunction() {
  // do whatever you like here

  setTimeout(yourFunction, 1);
}
    if (new Date() > new Date(2020, 11, 31, 12, 55, 59, 0)) {
      playjojo();
      console.log("true");
    } else {
      play();
      console.log("false");
      console.log(new Date());
    }
yourFunction();

