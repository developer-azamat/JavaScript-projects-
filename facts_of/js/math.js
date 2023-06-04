const btnMath = document.querySelector("#btn-math")

btnMath.addEventListener("click", () => {
    const numMath = document.querySelector("#num_math").value.trim()
   if (numMath > 0) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eecda8460emsh78e40b2b01297a9p189672jsn8ccfd4c8c210',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };
    const adme = document.querySelector("#addme-math")
    fetch(`https://numbersapi.p.rapidapi.com/${numMath}/math?fragment=true&json=true`, options)
        .then(response => response.json())
        .then(response => adme.innerHTML = `${numMath} number, ${response.text}`)
        .catch(err => console.error(err));
   } else {
    alert("Sorry, the information you entered could not be streamed")
   }
})

const menu = document.querySelector(".menu")


const navbarSecond = document.querySelector(".navbar-second")
menu.addEventListener ("click", () => {
   if(navbarSecond.style.display === "none") {
    navbarSecond.style.display = "flex"
   }else {
    navbarSecond.style.display = "none"
   }
})