let title = document.querySelector(".music-title");
let cover = document.querySelector("#image");
let audio = document.querySelector("#audio");
let prewBtn = document.querySelector("#prewBtn");
let play = document.querySelector("#play");
let nextBtn = document.querySelector("#nextBtn");
let musics = document.querySelector(".left-musics");
let menu = document.querySelector(".menu");
let musicLeft = document.getElementsByClassName("music-left");
let progress = document.querySelector(".progress");
let endtime = document.getElementById("endtime");
let currentTime = document.getElementById("curtime");
let range = document.querySelector("#range");
let progressContainer = document.getElementsByClassName("music-time")[0];

const songs = [
  "giybatchilar",
  "gasolina",
  "barmen",
  "Billie Eilish - Lovely",
  "volki",
  "Rauf Faik - метро",
];
// variables
let index = 0;
let isLoading = false;

function useData(index) {
  title.textContent = index;
  cover.src = `./img/${index}.jpg`;
  audio.src = `./musics/${index}.mp3`;
//   audio.play();
}

useData(songs[index]);

function playPause() {
  if (!isLoading) {
    isLoading = true;
    audio.play();
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    cover.classList.add("active");
  } else {
    isLoading = false;
    audio.pause();
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    cover.classList.remove("active");
  }
}

play.addEventListener("click", playPause);
// document.addEventListener("keydown",(e)=>{
//     e.preventDefault()
//     if(e.keyCode == 32){
//         playPause()
//     } else if (e.keyCode == 39){
//         nextMusic()
//     } else if (e.keyCode == 37){
//         prewMusic()
//     } else if (e.keyCode == 40){
//         range.value -= 5
//         changeVolume()
//     }else if (e.keyCode == 38){
//         range.value += 5
//         changeVolume()
//     }
// })

songs.forEach((element) => {
  musics.innerHTML += `<li><i class="fa-solid fa-music"></i><span class="music-left">${element}</span></li>`;
});
// console.log(musicLeft);
Array.from(musicLeft).forEach((item, index) => {
  item.addEventListener("click", () => {
    useData(songs[index]);
    isLoading = true;
    audio.play();
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    cover.classList.add("active");
    musics.classList.remove("active");
  });
});

menu.addEventListener("click", () => {
  musics.classList.toggle("active");
  console.log(musics.className);
});

function nextMusic() {
  if (index == songs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  useData(songs[index]);
  audio.play();
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  cover.classList.add("active");
}

nextBtn.addEventListener("click", nextMusic);

function prewMusic() {
  if (index == 0) {
    index = songs.length - 1;
  } else {
    index--;
  }
  useData(songs[index]);
  audio.play();
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  cover.classList.add("active");
}

prewBtn.addEventListener("click", prewMusic);

function progres(e) {
  let duration = e.srcElement.duration;
  let curTime = e.srcElement.currentTime;
  const percent = (curTime / duration) * 100;
  progress.style.width = `${percent}%`;
  if (parseInt(duration / 60) == NaN && parseInt(duration % 60) == NaN) {
    endtime.textContent = "00 : 00";
  } else if (parseInt(duration / 60) < 10 && parseInt(duration % 60) < 10) {
    endtime.textContent = `${"0" + parseInt(duration / 60)} : ${
      "0" + parseInt(duration % 60)
    }`;
  } else if (parseInt(duration / 60) < 10) {
    endtime.textContent = `${"0" + parseInt(duration / 60)} : ${parseInt(
      duration % 60
    )}`;
  } else if (parseInt(duration % 60) < 10) {
    endtime.textContent = `${parseInt(duration / 60)} : ${
      "0" + parseInt(duration % 60)
    }`;
  } else {
    endtime.textContent = `${parseInt(duration / 60)} : ${parseInt(
      duration % 60
    )}`;
  }
  if (parseInt(curTime / 60) == NaN && parseInt(curTime % 60) === NaN) {
    currentTime.textContent = "00 : 00";
  } else if (parseInt(curTime / 60) < 10 && parseInt(curTime % 60) < 10) {
    currentTime.textContent = `${"0" + parseInt(curTime / 60)} : ${
      "0" + parseInt(curTime % 60)
    }`;
  } else if (parseInt(curTime / 60) < 10) {
    currentTime.textContent = `${"0" + parseInt(curTime / 60)} : ${parseInt(
      curTime % 60
    )}`;
  } else if (parseInt(curTime % 60) < 10) {
    currentTime.textContent = `${parseInt(curTime / 60)} : ${
      "0" + parseInt(curTime % 60)
    }`;
  } else {
    currentTime.textContent = `${parseInt(curTime / 60)} : ${parseInt(
      curTime % 60
    )}`;
  }
  // currentTime.textContent = curTime
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickPoint = e.offsetX;
  let durationEl = audio.duration;
  audio.currentTime = (clickPoint * durationEl) / width;
}

progressContainer.addEventListener("click", setProgress);
function changeVolume() {
  audio.volume = range.value / range.max;
}
audio.addEventListener("timeupdate", progres);
audio.addEventListener("ended", nextMusic);
range.addEventListener("input", changeVolume);
