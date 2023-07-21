let firstCard = 8;
let secondCard = 9;
let cards = [firstCard, secondCard]
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
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
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
    let thirdCard = 6;
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
}