const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("form button");
const fromQurrency = document.querySelector(".from select");
const toQurrency = document.querySelector(".to select");
const exchangeRateTxt = document.querySelector(".exchange-rate");

for (let i = 0; i < dropList.length; i++) {
  for (currency_code in country_list) {
    let selected;
    if (i == 0) {
      selected = currency_code == "USD" ? "selected" : "";
    } else if (i == 1) {
      selected = currency_code == "UZS" ? "selected" : "";
    }

    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;

    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }

  dropList[i].addEventListener("change", ({ target }) => {
    loadFlag(target);
  });
}

function loadFlag(element) {
  for (code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}
window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromQurrency.value;
  fromQurrency.value = toQurrency.value;
  toQurrency.value = tempCode;
  loadFlag(fromQurrency);
  loadFlag(toQurrency);
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector(".amount");
  let amountValue = amount.value;

  if (amountValue == "" || amountValue == "0") {
    amount.value = 1;
    amountValue = 1;
  }
  exchangeRateTxt.innerHTML = "Getting exchange rate...";
  let url = `https://v6.exchangerate-api.com/v6/33efc4ec6d4b48d329c401c3/latest/${fromQurrency.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toQurrency.value];
      let totalExchangeRate = (amountValue * exchangeRate).toFixed(2);

      exchangeRateTxt.innerHTML = `${amountValue} ${fromQurrency.value} = ${totalExchangeRate} ${toQurrency.value} `;
    })
    .catch(() => {
      exchangeRateTxt.innerHTML = "Something went wrong";
    });
}
