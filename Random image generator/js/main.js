const container = document.querySelector(".content");
let baseURL = "https://source.unsplash.com/random/";
const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${baseURL}/${RandomSize()}/?${`random`}`;
  container.appendChild(img);
}

function RandomSize() {
  return `${RandomNumber()}x${RandomNumber()}`;
}

function RandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
