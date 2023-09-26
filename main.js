const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
console.log(minutes);

setInterval(runClock, 1000);
function runClock() {
  const time = new Date();
  const h = (minutes + time.getHours()) / 12;
  const m = (seconds + time.getMinutes()) / 60;
  const s = time.getSeconds() / 60;
  hours.stylesetProperty(hours * 360);
  minutes.stylesetProperty(minutes * 360);
  seconds.stylesetProperty(seconds * 360);
}

runClock();
