let text = document.querySelector(".fancy"),
  strText = text.textContent,
  splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += `<span>${splitText[i]} </span>`;
}

let char = 0;
let timer = setInterval(onTick, 70);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;

  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}