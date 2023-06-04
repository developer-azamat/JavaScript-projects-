const btnDate = document.querySelector("#btn-date");

btnDate.addEventListener("click", ()=> {
    const dateMonth = document.querySelector("#dateMonth").value.trim(),
        dayofDate = document.querySelector("#dayofDate").value.trim();
          
       if (dayofDate > 0 && dateMonth> 0 && dayofDate <= 31 && dateMonth <= 12 ) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eecda8460emsh78e40b2b01297a9p189672jsn8ccfd4c8c210',
                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
        };
        const adme = document.querySelector(".adme")
        fetch(`https://numbersapi.p.rapidapi.com/${dateMonth}/${dayofDate}/date?fragment=true&json=true`, options)
            .then(response => response.json())
            .then(response => adme.innerHTML = `On ${dateMonth} month,  ${dayofDate} day and ${response.year} year, ${response.text}`)
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


const box = document.querySelector(".box"),
    dateFacts = document.querySelector(".dateFacts"),
    btnBox = document.querySelector(".btn-box"),
    navbar = document.querySelector(".navbar");

btnBox.addEventListener("click", ()=>{
    box.style.display = "none"
    dateFacts.style.display = "flex"
    menu.style.opacity = "1"
    navbar.style.opacity = "1"
})

