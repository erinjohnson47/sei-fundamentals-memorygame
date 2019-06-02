var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch() {
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
} else {
  console.log("Sorry, not a match. Try again.");	
}
};
};
function flipCard(cardID) {
	console.log("User flipped " + cards[cardID]);
 cardsInPlay.push(cards[cardID]);
 };

flipCard(0);
flipCard(2);
checkForMatch();