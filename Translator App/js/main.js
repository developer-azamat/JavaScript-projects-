const selectTag = document.querySelectorAll("select");
const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const translateBtn = document.querySelector("button");
const exchangeIcon = document.querySelector(".exchange");
let icons = document.querySelectorAll(".row i"),
  modal__clipboard = document.querySelector(".modal__clipboard");

selectTag.forEach((tag, id) => {
  for (const country_code in countries) {
    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id == 1 && country_code == "uz-UZ") {
      selected = "selected";
    }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
    // tag.appendChild(option) // adding options tag inside select tag
  }
});

exchangeIcon.addEventListener("click", () => {
  let tempText = fromText.value,
    tempLang = selectTag[0].value;
  selectTag[0].value = selectTag[1].value;
  selectTag[1].value = tempLang;
  fromText.value = toText.value;
  toText.value = tempText;
});

translateBtn.addEventListener("click", () => {
  translateBtn.textContent = "Translating...";
  let text = fromText.value,
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
  let api_url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
  fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toText.value = data.responseData.translatedText;
      translateBtn.textContent = "Translate text";
    });
});

icons.forEach((icon) => {
  icon.addEventListener("click", ({ target }) => {
    if (target.classList.contains("fa-copy")) {
      if (target.id == "from") {
        if (fromText.value.trim() !== "") {
          navigator.clipboard.writeText(fromText.value);
          modal__clipboard.classList.add("active");
          setTimeout(() => {
            modal__clipboard.classList.remove("active");
          }, 2000);
        } else {
          alert("Please enter a message !");
        }
      } else {
        if (toText.value.trim() !== "") {
          navigator.clipboard.writeText(toText.value);
          modal__clipboard.classList.add("active");
          setTimeout(() => {
            modal__clipboard.classList.remove("active");
          }, 2000);
        } else {
          alert("Please enter a message !");
        }
      }
    } else {
      let utterance;
      if (target.id == "from") {
        utterance = new SpeechSynthesisUtterance(fromText.value);
        utterance.lang = selectTag[0].value;
      } else {
        utterance = new SpeechSynthesisUtterance(toText.value);
        utterance.lang = selectTag[1].value;
      }
      speechSynthesis.speak(utterance);
    }
  });
});
