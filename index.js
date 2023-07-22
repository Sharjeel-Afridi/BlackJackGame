
let cards = []
let hasBlackJack = false;
let sum = 0;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let startBtn = document.querySelector(".start-btn")

function getRandomCard(){
    if (Math.floor((Math.random() * 13)) + 1 === 1){
        return 11;
    }else if(Math.floor((Math.random() * 13)) + 1 > 10){
        return 10;
    } else{
        return Math.floor((Math.random() * 13)) + 1
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
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
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard();
        sum += thirdCard
        cards.push(thirdCard)
        cardsEl.textContent = "Cards: "
        renderGame()
    }
        
}