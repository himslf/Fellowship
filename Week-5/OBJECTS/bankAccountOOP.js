class BankAccount {
    constructor(type, money, backupAccount = null) {    // properties in ()
        this.type = type;
        this.money = money;
        this.transHist = [];
        this.backupAccount = backupAccount;
    } // properties passes as 'arguments' are essentially created.

    withdraw(moneyAmount) {
        const prevBal = this.money;
        this.money = this.money - moneyAmount

        this.transHist.push({
            prevBal: prevBal,
            transType: 'withdrawal',
            transAmount: moneyAmount,
            endBalance: this.money
        })
        if (this.money < 0) {
            const overDrawn = this.money * -1 // change to positive amount
            this.backupAccount.withdraw(overDrawn); // withdraw overdrawn amount
            this.deposit(overDrawn); // deposit into checking
            console.log('OVERDRAFT')
        }
    } // endWITHDRAW

    deposit(moneyAmount) {
        const prevBal = this.money;
        this.money = this.money + moneyAmount

        this.transHist.push({
            prevBal: prevBal,
            transType: 'deposit',
            transAmount: moneyAmount,
            endBalance: this.money
        })
    } // endDEPOSIT

    savingsAccount(moneyAmount) {
        const prevBal = this.money
        
    }


    showBalance(moneyAmount) {
        return this.moneyAmount;
    }
} // endCLASS

const savingsAccount = new BankAccount('SAViNGS', 777)
const checkingAccount = new BankAccount('CHECKiNG', 777, savingsAccount)

console.log('-----checking below-------')
console.log(checkingAccount)
checkingAccount.withdraw(1029)
console.log('-----checking after withdrawal-------')

console.log(checkingAccount)

//const newCheckingAccount= new BankAccount('PamAccount', 72993, savingsAccount)


//console.log(checkingAccount) // prints: BankAccount { type: 'CHECKiNG', money: 929, transHist: [] }
//checkingAccount.withdraw(10)
//console.log(checkingAccount) // prints: BankAccount { type: 'SAViNGS', money: 929, transHist: [] }
//checkingAccount.deposit(50)
//console.log(newCheckingAccount)



/*
Bonus
Give the BankAccount class a backupAccount property that can, optionally, contain a reference to another instance of the class, determined by some input
Whenever a BankAccount's balance goes below zero, it will remove money from the instance stored in backupAccount so that its balance goes back to zero.
This should trigger a withdrawal in the back up account equal to the amount of money that was withdrawn from the original account.
*/




