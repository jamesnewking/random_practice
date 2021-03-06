
class Card{
	constructor(suite, faceValue){
		this.suite = suite;
		this.faceValue = faceValue;
	}
	getSuite(){
		return this.suite;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		this.cardHolder = [];
		//takes in nothing
		//make storage for your card objects
	}
	addCard( suite, faceValue ){
		let newCard = new Card(suite, faceValue);
		this.cardHolder.push(newCard);
		return this.getCardCount()	;
		//adds a card to the deck
		//takes in a string suite and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		let numberOfCards = this.getCardCount();
		if (numberOfCards>1){

			let tempCard = this.cardHolder.pop();
			let randomSpot = Math.random*(numberOfCards-2);
			this.cardHolder.splice(randomSpot,0,tempCard);
		}
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		return this.cardHolder.length;
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards( numberOfCards ){
		let outCards = [];
		while (numberOfCards > 0 ){
			outCards.push(this.cardHolder.pop()	);
			numberOfCards--;
		}
		return outCards;
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}