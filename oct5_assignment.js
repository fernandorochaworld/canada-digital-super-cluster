

class BankAccount {
    #accountHolderName = '';
    #balance = 0;
    constructor(accountHolderName, balance) {
        this.#accountHolderName = accountHolderName;
        this.#balance = balance;
        
        console.log(`\n\n${this.#accountHolderName}'s new account.`);
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`\nNew deposit of ${amount} to ${this.#accountHolderName}'s account.`);
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    get accountHolderName() {
        return this.#accountHolderName;
    }

    getBalance() {
        return this.#balance;
    }

    logBalance() {
        console.log('Balance: ', this.#balance);
    }

}

class SavingsAccount extends BankAccount {
    #minimumBalance = 0;

    constructor(accountHolderName, balance, minimumBalance) {
        super(accountHolderName, balance)
        this.#minimumBalance = minimumBalance;
    }

    withdraw(amount) {
        const balance = this.getBalance();
        console.log(`Trying to withdraw $${amount}. The balance is ${balance}, Minimum Balance of ${this.#minimumBalance}.`);

        if ((balance - amount) >= this.#minimumBalance) {
            super.withdraw(amount);
        } else {
            console.log(`Minimum Balance Error.`);
        }
    }
}

class CheckingAccount extends BankAccount {
    #overdraftLimit = 0;

    constructor(accountHolderName, balance, overdraftLimit) {
        super(accountHolderName, balance)
        this.#overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        const balance = this.getBalance();
        console.log(`Trying to withdraw $${amount}. The balance is ${balance}, Maximum overdraft of ${this.#overdraftLimit}.`);

        if ((balance - amount) >= -this.#overdraftLimit) {
            super.withdraw(amount);
        } else {
            console.log('Overdraft Limit Error.');
        }
    }

    get overdraftLimit() {
        return this.#overdraftLimit;
    }

    set overdraftLimit(overdraftLimit ) {
        this.#overdraftLimit = overdraftLimit;
    }
}

// John
$accountJohn = new SavingsAccount('John Doe', 1500, 500);

// Invalid withdraw
$accountJohn.withdraw(1200);
$accountJohn.logBalance();

// Valid withdraw
$accountJohn.withdraw(700);
$accountJohn.logBalance();

// Invalid withdraw
$accountJohn.withdraw(801);
$accountJohn.logBalance();

// Valid withdraw
$accountJohn.withdraw(300);
$accountJohn.logBalance();

// Invalid withdraw
$accountJohn.withdraw(1);
$accountJohn.logBalance();

// Deposit
$accountJohn.deposit(2);
$accountJohn.logBalance();

// Valid withdraw
$accountJohn.withdraw(2);
$accountJohn.logBalance();

// Jane
$accountJane = new CheckingAccount('Jane Smith', 500, 300)

// Invalid withdraw
$accountJane.withdraw(802);
$accountJane.logBalance();

// Valid withdraw
$accountJane.withdraw(800);
$accountJane.logBalance();

// Invalid withdraw
$accountJane.withdraw(1);
$accountJane.logBalance();

// Deposit
$accountJane.deposit(2);
$accountJane.logBalance();

// Invalid withdraw
$accountJane.withdraw(3);
$accountJane.logBalance();

console.log('\n\nDone!!')
