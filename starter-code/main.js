console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne == cardTwo){

	alert("You have a match!");
}
else if (cardOne == cardThree)
{

	alert("You dont have a match. Try again");
}

else if (cardOne == cardFour)
{

	alert("You dont have a match! Try again");
}

else if (cardTwo == cardOne){
	alert("You have match");
}

else if (cardTwo == cardThree)
{
	alert("You dont have a match")

}

else if (cardTwo == cardFour)
{
	alert("You dont have a match")
}

else if (cardThree == cardFour)
{
		alert("You have a match!")
}
else if (cardThree == cardOne)
{
	alert("You dont have a match! Try again");
}
else if (cardThree == cardTwo)
{
	alert("You dont have a match! Try again");

}
else if (cardFour == cardThree)
{
	alert("You have a match");

}
else if (cardFour == cardOne)
{
	alert("You don't have a match");

}
else if (cardFour == cardTwo)
{
	alert("You don't have a match")
}
