const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")

one.addEventListener("click",()=> {
    one.parentElement.style.width = "500px" 
    two.parentElement.classList.add("two")
    three.parentElement.classList.add("three")
    four.parentElement.classList.add("four")
    five.parentElement.classList.add("five")
    one.parentElement.classList.add("one")
})

two.addEventListener("click", ()=> {
    two.parentElement.classList.remove("two")
    three.parentElement.classList.add("three")
    four.parentElement.classList.add("four")
    five.parentElement.classList.add("five")
    one.parentElement.style.width = "5%" 

})

three.addEventListener("click", ()=> {
    three.parentElement.classList.remove("three")
    two.parentElement.classList.add("two")
    four.parentElement.classList.add("four")
    five.parentElement.classList.add("five")
    one.parentElement.style.width = "5%" 
})

four.addEventListener("click", ()=> {
    four.parentElement.classList.remove("four")
    two.parentElement.classList.add("two")
    three.parentElement.classList.add("three")
    five.parentElement.classList.add("five")
    one.parentElement.style.width = "5%" 
})

five.addEventListener("click", ()=> {
    five.parentElement.classList.remove("five")
    three.parentElement.classList.add("three")
    four.parentElement.classList.add("four")
    two.parentElement.classList.add("two")
    one.parentElement.style.width = "5%"
})
