
let cards = []
let hasBlackJack = false;
let sum = 0;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let startBtn = document.querySelector(".start-btn")
let player = {
    name : "Sharjeel",
    chips : 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// startBtn.addEventListener('click', restartGame)

let btnCounter = 0;
function restartGame(){

    if (btnCounter === 0){
        isAlive = true
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        sum = firstCard + secondCard;
        cards = [firstCard, secondCard]
        renderGame()
        btnCounter++;
}
    else{

        cards = [];
        hasBlackJack = false;
        sum = 0;
        isAlive = true;
        message = "";
        cardsEl.textContent = "Cards: ";
        sumEl.textContent = "Sum: ";
        startBtn.textContent = "Start";
        messageEl.textContent = "Want to play a round?";
        // renderGame(); // Clear the card display and update the UI
        btnCounter = 0;
    }
    
}




function getRandomCard(){
    if (Math.floor((Math.random() * 13)) + 1 === 1){
        return 11;
    }else if(Math.floor((Math.random() * 13)) + 1 > 10){
        return 10;
    } else{
        return Math.floor((Math.random() * 13)) + 1
    }
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

