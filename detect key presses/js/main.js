window.addEventListener("keydown", (e) => {
    document.getElementById("result").innerHTML = `The key pressed is <span>${e.key}</span><span>Key Code: ${e.keyCode}</span>`
})

window.addEventListener("DOMContentLoaded", () => {
    const load = document.querySelector(".load")
    setTimeout(() => {
        setTimeout(() => {
            load.classList.add("one")
        },100)
        setTimeout(() => {
            load.classList.add("second")
        },200)
        setTimeout(() => {
            load.classList.add("three")
        },300)
        setTimeout(() => {
            load.classList.add("zero")
        },600)
    },1200)
})