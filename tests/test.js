import 'mocha';
import chai from 'chai';
import {ZenithAccount, ZecaAccount, CoporateAccount} from '../src/main.js';

const assert = chai.assert;

describe('ZenithAccount', () => {
    describe('ZenithAccount', () => {
        it('should be able to return the account name', () => {
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.name, 'Uche');
        })
    })

    describe('#ZenithAccount', () => {
        it('should be able to return the account number', () => {
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.number, 2020871405);
        });
    })

    describe('#ZenithAccount', () => {
        it('should be able to return the account balance', () => {
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.balance, 500);
        });
    })

    describe('#ZenithAccount balance', () => {
        it('should have its balance updated when a deposit is made', () => {
            let account = new ZenithAccount('Uche', 2020871405, 500);
            account.deposit(50000);
            assert.equal(account.balance, 50500);
        });
    })

    describe('#Zecaaccount', () => {
        it('should attracts 1% interest for every new deposit made', () => {
            let account = new ZecaAccount('Uche', 2020871405, 500);
            account.deposit(50000);
            assert.equal(account.balance, 51000);
        });
    })

    describe('#Zecaaccount', () => {
        it('should not have a negative account balance when a withdrawal is made', () => {
            let account = new ZecaAccount('Uche', 2020871405, 500);
            assert.equal(account.withdraw(210000), 'You have insufficient balance');
        });
    })

    describe('#Zecaaccount', () => {
        it('should return Invalid input when withdrawal value is not a number', () => {
            let account = new ZecaAccount('Uche', 2020871405, 500);
            assert.equal(account.withdraw('amount'), 'Invalid input');
        });
    })

    describe('#Zecaaccount', () => {
        it('should should return Invalid input when withdrawal value is not a number', () => {
            let account = new ZecaAccount('Uche', 2020871405, 500);
            assert.equal(account.deposit("amount"), 'Invalid input');
        });
    })

    
    describe('#Coporateaccount', () => {
        it('should return You have insufficient coverage when withdrawal exceeds what credit line can cover', () => {
            let account = new CoporateAccount('Uche', 2020871405, 500);
            assert.equal(account.withdraw(580000), "You have insufficient coverage");
        });
    })

     
})