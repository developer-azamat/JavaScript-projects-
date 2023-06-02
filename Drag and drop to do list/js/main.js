//  dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown)=> {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');


  select.addEventListener('click', ()=> {
    select.classList.toggle('select-clicked')
    caret.classList.toggle('caret-rotate')
    
    menu.classList.toggle('menu-open')
  })
  options.forEach((option)=> {
    option.addEventListener('click', ()=> {
      selected.textContent = option.textContent
    select.classList.remove('select-clicked')

    caret.classList.remove('caret-rotate')
    menu.classList.remove('menu-open')
    options.forEach((option)=> {
      option.classList.remove('active')
    })
    option.classList.add('active')
    })
  })
})

//  dragging todo
const dragArea = document.querySelector(".wrapper");
new Sortable(dragArea, { animation: 350, ghostClass: "blue-background-class" });

// fixable elements
const navbar = document.querySelector(".navbar");
const scroll__btn = document.querySelector(".scroll__btn");

// cookies
const acceptBtn = document.querySelector(".accept-btn");
const popUp = document.querySelector("#cookiePopup");

// add todo
const todoInput = document.querySelector(".todo");
const todoForm = document.querySelector("form");

// variable
let todoArr = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = {
    name: todoInput.value.trim(),
    id: Math.random(),
  };

  if (todo.name) {
    todoArr.push(todo);

    localStorage.setItem("todos", JSON.stringify(todoArr));
    useData();
  } else {
    alert("Please enter something");
  }

  todoInput.value = "";
});

function useData() {
  dragArea.innerHTML = "";

  let newTodoArr = JSON.parse(localStorage.getItem("todos"))
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  if (newTodoArr.length > 0) {
    newTodoArr.forEach((item) => {
      const { id, name } = item;
      dragArea.innerHTML += `
          <div class="item">
              <span class="text">${name}</span>
              <div style="display: flex; gap: 10px; align-items:center;">
                <i class="fas fa-bars"></i>
                <i class="fa-solid fa-trash" onclick="delTodo(${id})"></i>
              </div>
          </div>
      `;
    });
  } else {
    dragArea.innerHTML = `
      <div class="item">
        <span class="text">now your list is empty</span>
      </div>
    `;
  }
}

useData();

function delTodo(id) {
  let filteredTodo = todoArr.filter((item) => {
    return item.id !== id;
  });

  todoArr = filteredTodo;

  localStorage.setItem("todos", JSON.stringify(todoArr));

  useData();
}
acceptBtn.addEventListener("click", () => {
  let d = new Date();

  d.setMinutes(2 + d.getMinutes());
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  popUp.classList.add("hidden");
  popUp.classList.remove("show");
});

const checkCookie = () => {
  const input = document.cookie.split("=");

  if (input[0] == "myCookieName") {
    popUp.classList.add("hidden");
    popUp.classList.remove("show");
  } else {
    popUp.classList.remove("hidden");
    popUp.classList.add("show");
  }
};

window.addEventListener("load", () => {
  setTimeout(() => {
    checkCookie();
  }, 1000);
});

scroll__btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scroll__btn.classList.add("active");
    navbar.classList.add("active");
  } else {
    scroll__btn.classList.remove("active");
    navbar.classList.remove("active");
  }
});
