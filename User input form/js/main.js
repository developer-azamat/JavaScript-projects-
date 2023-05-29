const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit = document.querySelector(".submit");

form.addEventListener("submit", sendMail);

function sendMail(e) {
  submit.textContent = `Sending..`;
  e.preventDefault();

  let ebody = `
  <b>Name: </b> ${username.value} <br>
  <b>Email: </b> ${email.value} <br>
  <b>Message: </b> ${message.value} <br>
  `;

  Email.send({
    SecureToken: "aedbd719-7ce5-4c97-9daf-8a8ce55c5b94",
    To: "azamatjonazimov561@gmail.com",
    From: "azamatjonazimov561@gmail.com",
    Subject: "This is the subject " + email.value,
    Body: ebody,
  }).then((message) => {
    alert(message);
    submit.textContent = `Send`
  });
  form.reset();
}
