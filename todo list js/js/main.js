const todoForm = document.querySelector(".todoForm");
const list = document.querySelector("#todo");
const check = document.querySelector(".check");
const txtName = document.querySelector(".txt_name");
const box = document.querySelector(".box");
const nameTask = document.querySelector(".nameTask");
const oknoLogin = document.querySelector(".login");

// sign-up && sign-in

const login = document.querySelector(".sign-in");
const signInBtn = document.querySelector("#signingBtn");
const signUp = document.querySelector(".sign-up");
const signUpBtn = document.querySelector("#uper_sign");

let load = document.querySelector(".load");

let isUser = localStorage.getItem("user")
  ? localStorage.getItem("user")
  : false;

const logout = document.querySelector("#logout");
setTimeout(() => {
  load.style.display = "none";

  if (isUser) {
    container.classList.add("click");
    oknoLogin.style.display = "none";
  }
}, 900);

const contentLeft = document.querySelector(".content-left");
const contentRight = document.querySelector(".content-right");

signInBtn.addEventListener("click", () => {
  contentLeft.style.zIndex = "-2";
  login.classList.add("item");
  login.style.display = "block";
  signUp.style.display = "none";
  contentRight.style.zIndex = "1";
});

signUpBtn.addEventListener("click", () => {
  contentRight.style.zIndex = "-2";
  login.classList.remove("item");
  login.style.display = "none";
  signUp.style.display = "block";
  contentLeft.style.zIndex = "1";
});

const opentodo = document.querySelector(".sign_inBTn");
let container = document.querySelector(".container");

opentodo.addEventListener("click", (e) => {
  e.preventDefault();
  let logintodo = document.querySelector("#login_in").value.toLowerCase();
  let passLogin = document.querySelector("#password_signIn").value.trim();

  if (logintodo == "azamat" && passLogin == 2802) {
    container.classList.add("click");
    oknoLogin.style.display = "none";
    
    isUser = true;
    localStorage.setItem("user", isUser);

    logintodo = ""
    passLogin = ""
  } else {
    alert("Incorrect password or login");
  }
});

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
});
const btns = document.querySelectorAll(".btn");

const tasksName = ["Codial", "Universitet", "Other"];
btns[1].addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className == "btn") {
    e.target.classList.add("active");
    box.classList.add("active");
    nameTask.textContent = `${tasksName[0]}`;
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 3000);
  } else {
    box.classList.remove("active");
    e.target.classList.remove("active");
  }
});

btns[2].addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.className == "btn") {
    e.target.classList.add("active");

    box.classList.toggle("active");
    nameTask.textContent = `${tasksName[1]}`;

    setTimeout(() => {
      e.target.classList.remove("active");
    }, 3000);
  } else {
    box.classList.toggle("active");
    e.target.classList.remove("active");
  }
});

btns[3].addEventListener("click", (e) => {
  if (e.target.className == "btn") {
    e.target.classList.add("active");
    box.classList.toggle("active");
    nameTask.textContent = `${tasksName[2]}`;

    setTimeout(() => {
      e.target.classList.remove("active");
    }, 3000);
  } else {
    box.classList.toggle("active");
    e.target.classList.remove("active");
  }
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newText = txtName.value.trim();

  if (newText) {
    todo(newText);
    txtName.value = "";
  } else {
    alert("Birorta eslatma kiriting");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.className == "check") {
    e.target.parentElement.parentElement.classList.toggle("active");
  } else if (e.target.className == "remove") {
    e.target.parentElement.parentElement.remove();
  }
});

function todo(item) {
  list.innerHTML += `
    <li class="list" data-aos="flip-up" data-aos-duration="5000">
            <p>${item}</p>
        <div class="buttons">
            <button class="check"><i class="fa-solid fa-check"></i></button>
            <button class="remove"><i class="fa-solid fa-trash"></i></button>
        </div>
    </li>`;
}
