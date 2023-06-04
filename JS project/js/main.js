var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let api_url = "https://jsonplaceholder.typicode.com/posts";

let userEl = document.querySelector(".card");
const list = document.getElementsByClassName("list");
let username = document.querySelector("#username");
let userData = [];

const getData = async (api) => {
  const req = await fetch(api_url);
  const data = await req.json();

  useData(data);
  userData = data;
};

getData(api_url);

function useData(data) {
  data.forEach((element, idx) => {
    userEl.innerHTML += `<li class="list">${idx + 1}. ${element.title.slice(
      0,
      15
    )}</li>`;
  });
  update();
}

function update(user = "") {
  Array.from(list).forEach((item) => {
    if (item.textContent.toLowerCase().includes(user.toLowerCase())) {
      item.removeAttribute("hidden");
    } else {
      item.setAttribute("hidden", true);
    }
  });
}

username.addEventListener("input", () => update(username.value));
