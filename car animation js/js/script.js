"use strict";

const btn = document.querySelector('.btn');


function animation () {
  let pos = 0;

  const myId = setInterval(wrap, 10);

  function wrap () {
    if (pos === 700) {
      clearInterval(myId);
    }else {
      pos ++;
      document.querySelector('.car').style.left = pos + "px"
    }
  }
}

btn.addEventListener("click", animation)