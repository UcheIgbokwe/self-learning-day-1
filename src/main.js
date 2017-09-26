'use strict'

class ZenithAccount{

    constructor(accNumber, accName, age){
        this._accountNumber = accNumber;
        this._accountName = accName;
        this._balance = 0;
        this._age =age;

    }

    get accountName(){
        return this._accountName;
    }
    get accountNumber(){
        return this._accountNumber;
    }
    get balance(){
        return this._balance;
    }
    set age(newAge){
        this._age = newAge;
    }
    get age(){
        return this._age;
    }
    deposit(amount){
        if(amount > 0){
            this._balance += amount;
            return true;
        }else{
            return false;
        }
    }
    withdraw(amount){
        if(amount > this._balance){
            return false;
        }else{
            this._balance -= amount;
            return true;
        } 
    }

}
class ZecaAccount extends ZenithAccount{
    constructor (accNumber, accName, accBonus){
        super (accNumber,accName);
        this.atmBonus = accBonus;
    }
    addBonus(){
        this.bonus = getbalance() * this.atmBonus/100;
        deposit(this.bonus);
    }
}
class checkingAccount extends ZenithAccount{

    constructor(accNumber,accName){
        super(accNumber,accName);
        this._transactionCount = 0;
        this._numFree = 2;
        this._transFee = 5;
    }
    deposit(amount){
        if (super.deposit(amount)){
            this._transactionCount++;
            return true;
        }
        return false;
    }
    withdraw(amount){
        if(super.withdraw(amount)){
            this._transactionCount++;
            return true;
        }
        return false;
    }
    deductFees(){
        if(this_transactionCount > this._numFree){
            const fees = this._transFee * (this_transactionCount - this._numFree);

        }
        if(super.withdraw(fees)){
            this._transactionCount = 0;
        }
    }
}
export {ZenithAccount,ZecaAccount,checkingAccount};