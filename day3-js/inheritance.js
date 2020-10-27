class Account {
    constructor(no, name, amount) {
        this.accNo = no;
        this.name = name;
        this.balance = amount;
    }

    credit(amount) {
        const stringExp = `The amount of Rs. ${amount} is added to your account`;
        console.log(stringExp);
		this.balance += amount;
    }

    debit(amount) {
        if (amount > this.balance) {
            throw "Insufficient funds";
        }
        this.balance -= amount;
    }
}

class SBAccount extends Account {
    calculateInterest() {
        this.rate = 6.5/100;
        const bal = this.balance;
		const term = 1/4;

		const interest = bal * this.rate * term;
        this.credit(interest);
    }
}

const acc = new SBAccount(111, "Milind", 5000);
acc.credit(5000);
acc.calculateInterest();
try {
    acc.debit(500000);
} catch(ex) {
	console.log(ex);
} finally {
	console.log("All is well!!!");
}
