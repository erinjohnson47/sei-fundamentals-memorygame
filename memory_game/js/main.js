var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

function createBoard() { 
 	for (i = 0; i < cards.length; i++) {
        cards[i];
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
 	cardElement.setAttribute('data-id', i);
 	cardElement.addEventListener('click', flipCard);
 	document.getElementById('game-board').appendChild(cardElement);
 }
};

var cardsInPlay = [];

function flipCard() { 
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage); 
 cardsInPlay.push(cards[cardId].rank);
 if (cardsInPlay.length === 2) {checkForMatch()}
};

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
  alert("Sorry, not a match. Try again.");	
}
};

 createBoard();
