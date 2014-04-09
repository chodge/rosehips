/// <reference path="../src/container.js"/>
var should = require('should'),
    Container = require('../src/container').Container,
	Expense = require('../src/variableExpense').Expense;

describe('Variable Expense', function () {    
    describe('#totalQuantity()', function () {
        it('should default to quantity without ctor params', function () {
            var expense = new Expense;

            expense.totalQuantity(1).should.equal(1);
            expense.totalQuantity(52).should.equal(52);
        });

        it('should default to the quantity', function () {
            var expense = new Expense(1);

            expense.totalQuantity(1).should.equal(1);
            expense.totalQuantity(25).should.equal(25);
        });

        it('should be the quantity x the unit\'s total', function () {
            var pail = new Container('Pail', 50),
                expense = new Expense(3, pail);

            expense.totalQuantity(1).should.equal(50);
            expense.totalQuantity(6).should.equal(300);
        });
    });

    describe('#totalCost()', function () {
        it('should default to 0 without ctor params', function () {
            var expense = new Expense;

            expense.totalCost(1).should.equal(0);
            expense.totalCost(52).should.equal(0);
        });

        it('should be the unit cost x the quantity', function () {
            var pail = new Container('Pail', 50),
                expense = new Expense(2, pail);

            expense.totalCost(1).should.equal(100);
            expense.totalCost(12).should.equal(12 * 2 * 50);
        });
    });
});