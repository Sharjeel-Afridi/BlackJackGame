let firstCard = 8;
let secondCard = 9;

let hasBlackJack = false;
let sum = firstCard + secondCard;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let startBtn = document.querySelector(".start-btn")


function startGame() {
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    sumEl.textContent = "Sum: " + sum
    startBtn.textContent = "Restart"
    if (sum < 21){
        message = "Do you want to draw a new card? "
        

    } else if (sum === 21) {
        message = "Wohoo! You've got Black Jack!"
        
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    sum += thirdCard
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard + ", " + thirdCard
    sumEl.textContent = "Sum: " + sum
    renderGame()
}