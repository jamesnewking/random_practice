
class Bank{
	constructor(bankName){
		this.bankName = bankName;
		this.accountObj = {};
		//takes in the name of the bank.
		//makes an object to store all accounts into
	}

	makeAccount( accountNumber ){

		if( this.accountObj[accountNumber] === undefined ){
			this.accountObj[accountNumber] = new Account;
			return this.accountObj[accountNumber];
		} else {
			return false;
		}
		
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object
		//returns the Account object that was constructed
	}

	checkForAccount( accountNumber ){
		if( this.accountObj[accountNumber] === undefined ){
			return false;
		} else {
			return true;
		}
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNumber ){
		console.log("running!");
		if (this.checkForAccount(accountNumber)){
			console.log("something", this.accountObj[accountNumber].getAmount() );
			
			if (this.accountObj[accountNumber].getAmount() > 0){
				return `account is not empty`
			} else {
				delete this.accountObj[accountNumber];
				return `account ${accountNumber} deleted`;
			}


		}else {
			return `account ${accountNumber} does not exist`;
		}
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			'account <accountNumber> deleted'

	}
	deposit( accountNumber, depositAmount){
		if (this.checkForAccount(accountNumber)){
			this.accountObj[accountNumber].add(depositAmount);
			return `account ${accountNumber} now has ${this.accountObj[accountNumber].getAmount()}`;
		} else {
			return `account does not exist`;
		} 
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, amount ){
		if (this.checkForAccount(accountNumber)){
			let withDrawnAmount = this.accountObj[accountNumber].remove(amount);
			console.log(`removed ${withDrawnAmount} from account ${accountNumber}. It now has ${this.accountObj[accountNumber].getAmount()}`);
			return `removed ${withDrawnAmount} from account ${accountNumber}. It now has ${this.accountObj[accountNumber].getAmount()}`;
		} else {
			return `account does not exist`;
		} 
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}