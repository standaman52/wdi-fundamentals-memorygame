console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var createCards = function(){
var card = document.getElementById('game-board');
var i;
	for(i = 1; i < 4; i++)
	{
	var newListItem = document.createElement("div")
	newListItem.className = 'card';
	card.appendChild(newListItem);

	
	}
}

createCards();

// if (cardOne == cardTwo){

// 	alert("You have a match!");
// }
// else if (cardOne == cardThree)
// {

// 	alert("You dont have a match. Try again");
// }

// else if (cardOne == cardFour)
// {

// 	alert("You dont have a match! Try again");
// }

// else if (cardTwo == cardOne){
// 	alert("You have match");
// }

// else if (cardTwo == cardThree)
// {
// 	alert("You dont have a match")

// }

// else if (cardTwo == cardFour)
// {
// 	alert("You dont have a match")
// }

// else if (cardThree == cardFour)
// {
// 		alert("You have a match!")
// }
// else if (cardThree == cardOne)
// {
// 	alert("You dont have a match! Try again");
// }
// else if (cardThree == cardTwo)
// {
// 	alert("You dont have a match! Try again");

// }
// else if (cardFour == cardThree)
// {
// 	alert("You have a match");

// }
// else if (cardFour == cardOne)
// {
// 	alert("You don't have a match");

// }
// else if (cardFour == cardTwo)
// {
// 	alert("You don't have a match")
// }
