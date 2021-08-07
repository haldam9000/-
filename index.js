cardsEl.textContent = "打牌: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "全部的: " + sum
    if (sum <= 20) {
        message = "你想要一张新卡吗"
    } else if (sum === 21) {
        message = "你有二十一点"
        hasBlackJack = true
    } else {
        message = "你输了，再试一次"
        isAlive = false
    }
    messageEl.textContent = message
}

//game by adamIreland 2021 adam.frontend.developer@gmail.com
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
