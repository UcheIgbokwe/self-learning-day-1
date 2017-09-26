import {describe, it} from 'mocha';
import assert from 'assert';
import {ZecaAccount,ZenithAccount,checkingAccount} from '../src/main.js';

describe('ZenithAccount',() => {
    describe('#ZenithAccount',()=>{
        it('should be able to return the account name', () => {
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.name, 'Uche');
        });
    });
    describe('#ZenithAccount',() =>{
        it('should be able to return the account number', () =>{
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.number, 2020871405);
        });
    });
    describe('#ZenithAccount',() =>{
        it('should be able to return its balance when a deposit or withdrawal is made', () =>{
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.balance, 500);
        });
    });
});

describe('ZecaAccount',() => {
    describe('#ZecaAccount',()=>{
        it('should be able to return the account name', () => {
            let account = new ZecaAccount('Uche', 2020871405, 100);
            assert.equal(account.name, 'Uche');
        });
    });
    describe('#ZecaAccount',() =>{
        it('should be able to return the account number', () =>{
            let account = new ZecaAccount('Uche', 2020871405, 100);
            assert.equal(account.number, 2020871405);
        });
    });
    describe('#ZecaAccount',() =>{
        it('should be able to return its balance when a deposit or withdrawal is made', () =>{
            let account = new ZecaAccount('Uche', 2020871405, 100);
            assert.equal(account.bonus(30), 650);
        });
    });
});

describe('ZenithAccount',() => {
    describe('#ZenithAccount',()=>{
        it('should be able to return Insufficient balance', () => {
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.withdraw(1000), 'Insufficient balance');
        });
    });
    describe('#ZenithAccount',() =>{
        it('should be able to return balance', () =>{
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.number, 2020871405);
        });
    });
    describe('#ZenithAccount',() =>{
        it('should be able to return its balance when a deposit or withdrawal is made', () =>{
            let account = new ZenithAccount('Uche', 2020871405, 500);
            assert.equal(account.balance, 500);
        });
    });
});


