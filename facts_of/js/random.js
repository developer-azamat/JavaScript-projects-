const randomBtn = document.querySelector("#random-btn");



randomBtn.addEventListener("click", () => {
   const select = document.querySelector("select")
//    let num = Math.floor(Math.random()*2)
    if (select.value =="Math"){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eecda8460emsh78e40b2b01297a9p189672jsn8ccfd4c8c210',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };

    const admeRandom = document.querySelector("#adme-random")
    fetch('https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', options)
        .then(response => response.json())
        .then(response => admeRandom.innerHTML = `Number of facts ${response.number} ${response.text}` )
        .catch(err => console.error(err));

    } else if (select.value == "Year") {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eecda8460emsh78e40b2b01297a9p189672jsn8ccfd4c8c210',
                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
        };

        const admeRandom = document.querySelector("#adme-random")

        fetch(`https://numbersapi.p.rapidapi.com/1465/year?fragment=true&json=true`, options)
            .then(response => response.json())
            .then(response => admeRandom.innerHTML = response.text)
            .catch(err => console.error(err));
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