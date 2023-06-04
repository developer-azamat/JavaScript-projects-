let start = document.querySelector('#start');
let reset = document.querySelector('#reset');

let h = document.querySelector("#hour");
let m = document.querySelector("#minute");
let s = document.querySelector("#sec");

// variable 
let startTimer = null;

function timer () {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0
        m.value = 0 
        s.value = 0
    }else if (s.value != 0) {
        s.value--;
    }else if (m.value != 0 && s.value == 0) {
        m.value--;
        s.value = 59;
    }else if (h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

function stopTimer (){
    clearInterval(startTimer);
}

start.addEventListener("click", ()=>{
    //initialize the timer

    function startInterval (){
        startTimer = setInterval(()=> {
            timer();
        },1000)
    }

    startInterval();

})

reset.addEventListener("click", function (){
    stopTimer();
    h.value = 0
    m.value = 0
    s.value = 0
})