console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var card = document.getElementById('game-board');


var createCards = function(){

	for(i = 0; i < cards.length; i++)
	{
	var cardType = document.createElement('div');
	cardType.className = 'card';
	card.appendChild(cardType);
	cardType.addEventListener('click', isTwoCards);
	cardType.setAttribute('card', cards[i]);
	// document.getElementById("game-board").innerHTML = '<img src= "queen.png" />';

	};
};


createCards();

  


var isMatch = function(cards){
	if(cards[0] === cards[1])
	{
		alert ('You have a match')
	}
	else
	{
		alert ('You dont have a match')
	}


}

function isTwoCards()
{


	cardsInPlay.push(this.getAttribute('card'));
	if (cardsInPlay.length === 2){
			if(cardsInPlay[0] === 'king' && cardsInPlay[1] === 'king')
			{
					document.getElementById("game-board").innerHTML = '<img src= "king.png" />';
			}
				else
				{
					document.getElementById("game-board").innerHTML = '<img src= "queen.png" />';
					

				}
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}

}






