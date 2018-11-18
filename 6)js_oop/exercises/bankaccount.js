

class Account{
	constructor(){
		this.moneyInAccount = 0;
		//store the amount of money in the account
	}
	add( amount ){
		if (typeof(amount) !== "number"){
			amount = 0;
		}
		return this.moneyInAccount = this.moneyInAccount + amount;
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		if (typeof(amount) !== "number"){
			amount = 0;
		}
		let withdrawn = 0;
		if (amount > this.moneyInAccount){
			withdrawn = this.moneyInAccount;
			this.moneyInAccount = 0;
		} else {
			withdrawn = amount;
			this.moneyInAccount = this.moneyInAccount - withdrawn;
		}
		return withdrawn;
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.moneyInAccount;
		//returns the amount in the account
	}
}

//export default Account;
//module.exports = Account;