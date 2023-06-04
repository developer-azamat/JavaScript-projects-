// buttons
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

//dice image 
const diceImage = document.querySelector(".dice")
diceImage.style.display = "none"

//variables
let currentScore = 0
let activePlayer = 0
let score = [0,0]
let gameOver = true

const switchPlayer = ()=>{
    currentScore = 0,
    document.getElementById(`current--${activePlayer}`).textContent = currentScore,
    activePlayer = activePlayer == 0 ? 1 : 0,
    document.querySelector(".player--0").classList.toggle("player--active"),
    document.querySelector(".player--1").classList.toggle("player--active")
}


btnRoll.addEventListener('click',()=>{
    if(gameOver){
    diceImage.style.display = "block"
    const random = Math.floor(Math.random()*6+1)
    diceImage.src = `./dice-${random}.png`

    if( random !== 1){
        currentScore += random
       document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }else (
       switchPlayer()
    )}
})

//hold score 

btnHold.addEventListener("click", ()=> {
    if (gameOver){ score[activePlayer ] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    if (score[activePlayer]>=100) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        gameOver = false
    }else{
        switchPlayer()
    }
    }
})

//new game 

btnNew.addEventListener("click", ()=>{
    currentScore = 0
    activePlayer = 0
    score =[0, 0]
    gameOver = true
    document.getElementById(`current--0`).textContent = 0
    document.getElementById(`current--1`).textContent = 0
    document.getElementById(`score--0`).textContent = 0
    document.getElementById(`score--1`).textContent = 0
    document.querySelector(".player--0").classList.remove("player--winner")
    document.querySelector(".player--1").classList.remove("player--winner")
    document.querySelector(".player--1").classList.remove("player--active")
    document.querySelector(".player--0").classList.add("player--active")
})