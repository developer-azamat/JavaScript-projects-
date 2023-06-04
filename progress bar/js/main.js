let lineProgress = document.querySelector(".line-progress");
let logpass = document.querySelector("#logpass");

logpass.addEventListener("input", () => {
  const password = logpass.value;

  if (password.length > 5 && password.length < 7) {
    lineProgress.style.width = "20%";
  } else if (password.includes("")) {
  }
});

