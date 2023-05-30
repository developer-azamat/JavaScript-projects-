const workTitle = document.querySelector("#work");
const breakTitle = document.querySelector("#break");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

// start
start.addEventListener("click", startTimer);
reset.addEventListener("click", startTimer);

function startTimer() {
  start.style.display = "none";
  document.getElementById("reset").style.display = "block";

  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1,
    breakCount = 0;

  function timerFunction() {
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    seconds = seconds - 1;

    if (seconds === 0) {
      seconds = 59;
      workMinutes = workMinutes - 1;
      if (workMinutes == -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;

          // change the panel
          workTitle.classList.remove("active");
          breakTitle.classList.add("active");
        } else {
          workMinutes = workTime;
          breakCount++;

          breakTitle.classList.remove("active");
          workTitle.classList.add("active");
        }
      }
    }
  }

  setInterval(timerFunction, 1000);
}
