let img = document.getElementById("img"),
  rightBtn = document.querySelector("#right"),
  leftBtn = document.querySelector("#left");

const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.opacity = "0.1";
  setTimeout(() => {
    loader.style.display = "none";
  }, 100);
}, 1000);

const spanElements = document.querySelectorAll("span");

const imgs = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "./images/img6.jpg",
];

let index = 0;

spanElements.forEach((item, index) => {
  index++;

  item.addEventListener("click", () => {
    item.classList.toggle("active");
    img.src = imgs[index];
  });
});

rightBtn.addEventListener("click", nextously);

function nextously() {
  index += 1;

  if (index === imgs.length) {
    index = 0;
    img.src = `${imgs[index]}`;
  } else {
    img.src = `${imgs[index]}`;
  }
}

leftBtn.addEventListener("click", previos);

function previos() {
  index -= 1;

  if (index == -1) {
    index = imgs.length - 1;
    img.src = `${imgs[index]}`;
  } else {
    img.src = `${imgs[index]}`;
  }
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    nextously();
  } else if (e.keyCode == 37) {
    previos();
  }
});
