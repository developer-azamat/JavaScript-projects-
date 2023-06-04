const yearBtn = document.querySelector("#yearBtn")

yearBtn.addEventListener("click", () => {
    const yearInput = document.querySelector("#yearInput").value.trim()

    if (yearInput > 0) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eecda8460emsh78e40b2b01297a9p189672jsn8ccfd4c8c210',
                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
        };
    
        const yearText = document.querySelector("#yearText")
        fetch(`https://numbersapi.p.rapidapi.com/${yearInput}/year?fragment=true&json=true`, options)
            .then(response => response.json())
            .then(response => yearText.innerHTML = `Year: ${response.number}, ${response.text}`)
            .catch(err => console.error(err));
    } else{
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











    