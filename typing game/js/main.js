const select = document.querySelector("#select");
const text = document.querySelector("#text");
const input = document.querySelector("#input");
const timeText = document.querySelector("#timeText");
const scoreText = document.querySelector("#scoreText");
const highScoreEl = document.querySelector("#highScore");
const overGame = document.querySelector("#overGame");
const again = document.querySelector("#again");
const resultGame = document.querySelector("#resultGame");
const loader = document.querySelector(".loader");
const container = document.querySelector("#container");

let api = "https://random-word-api.herokuapp.com/word";

let word;
let times = 10;
let scorTxt = 0;
let highScore;
let level = localStorage.getItem("level")
  ? localStorage.getItem("level")
  : "Easy";
select.value = level;

localStorage.getItem("highScore") > 0
  ? (highScore = localStorage.getItem("highScore"))
  : (highScore = 0);

const randomWord = async (api) => {
  let req = await fetch(api);
  let data = await req.json();

  word = data[0];

  text.innerHTML = word;
  loader.style.display = "none";

  container.classList.remove("blur-sm");
};

randomWord(api);

input.addEventListener("input", () => {
  const inputText = input.value;
  if (inputText == word) {
    randomWord(api);
    input.value = "";
    scorTxt += 1;
    scoreText.textContent = scorTxt;
    if (level == "Easy") {
      times += 5;
      timeText.textContent += "+5";
    } else if (level == "Medium") {
      times += 3;
      timeText.textContent += "+3";
    } else if (level == "Hard") {
      times += 2;
      timeText.textContent += "+2";
    }
  } else {
    input.style.cssText = "border:2px solid red";
  }
});

select.addEventListener("change", () => {
  level = select.value;
  localStorage.setItem("level", select.value);
});

// localStorage.clear()

setInterval(() => {
  if (times > 0) {
    times -= 1;
    timeText.textContent = times;
  } else if (times == 0) {
    overGame.style.display = "flex";
    resultGame.textContent = `sizning natijangiz: ${scorTxt}`;

    if (localStorage.getItem("highScore") < scorTxt) {
      highScore = scorTxt;
      localStorage.setItem("highScore", highScore);
      const newScore = document.querySelector("#newScore");
      newScore.style.display = "block";
      document.querySelector("#highScoreX").textContent = highScore;
      document.querySelector("img").style.display = "block";
    } else if (!localStorage.getItem("highScore") > scorTxt) {
      highScore = scorTxt;
      localStorage.setItem("highScore", highScore);
    }
  }
}, 1000);

let result = localStorage.getItem("highScore");

highScoreEl.textContent = result;
