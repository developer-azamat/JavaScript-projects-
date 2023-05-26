const loader = document.querySelector('.loader');
const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")
const millisecond = document.querySelector("#millisecond")

setTimeout(()=>{
    loader.style.display = 'none';
},2000)

setInterval(()=>{
    const data = new Date
    
    const date = data.getDate()
    const hours = data.getHours()
    const month = data.getMonth()
    const year = data.getFullYear()
    const day = data.getDay()
    const minutes = data.getMinutes()
    const seconds = data.getSeconds()
    if (hours < 10) {
        hour.textContent = `0${hours}`
    }else {
        hour.textContent = `${hours}`
    }
    if (minutes < 10) {
        minute.textContent = `0${minutes}`
    }else {
        minute.textContent = `${minutes}`
    }
    if (seconds < 10) {
        second.textContent = `0${seconds}`
    }else {
        second.textContent = `${seconds}`
    }
},1000)

// setInterval(()=>{
//     const data = new Date
//     const milliseconds = data.getMilliseconds()
//     milliseconds < 10 ? millisecond.textContent = `0${milliseconds}` : millisecond.textContent = `${milliseconds}`
// },1)





// console.log(date, hour, minute, month, day, year);