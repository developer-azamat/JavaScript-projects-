const quote = document.querySelector(".quote");
const authorEl = document.querySelector(".name");
const header = document.querySelector("header");
const copy = document.querySelector(".copy");
const speech = document.querySelector(".speech");
const copiedContainer = document.querySelector(".copied-container");
const newQuote = document.querySelector("button");
const twitterBtn = document.querySelector(".twitter");

let api_link = "http://api.quotable.io/random";

const getData = async (api) => {
  newQuote.classList.add("loading");
  newQuote.textContent = "Loading Quote..";
  const req = await fetch(api);
  const data = await req.json();

  usingData(data);
};

getData(api_link);

function usingData(data) {
  authorEl.textContent = data.author;
  header.textContent = data.tags;
  quote.textContent = data.content;

  newQuote.textContent = "New Quote";
  newQuote.classList.remove("loading");
  copyQuote();
}

function copyQuote() {
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.textContent);

    copiedContainer.classList.add("active");

    setTimeout(() => {
      copiedContainer.classList.remove("active");
    }, 1400);
  });
}

function speechQuote() {
  let utterance;

  utterance = new SpeechSynthesisUtterance(quote.textContent);
  utterance.lang = "en-GB";

  speechSynthesis.speak(utterance);
}

speech.addEventListener("click", speechQuote);

copyQuote();

newQuote.addEventListener("click", () => {
  getData(api_link);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.textContent}`;
  window.open(tweetUrl, "_blank");
});