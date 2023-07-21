let firstCard = 8;
let secondCard = 9;
let hasBlackJack = false;
let sum = firstCard + secondCard;
let isAlive = true;
let message = "";

if (sum < 21){
    message = "Do you want to draw a new card? "
    

} else if (sum === 21) {
    message = "Wohoo! You've got Black Jack!"
    
    hasBlackJack = true;
} else {
    message = "You're out of the game!"
    
    isAlive = false;
}

console.log(message)