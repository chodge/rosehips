var should = require('should'),
	calculate = require('../src/calculator').calculate,
	FixedExpense = require('../src/fixedExpense').Expense,
	VariableExpense = require('../src/variableExpense').Expense;

describe('Calculator', function() {
	describe('#calculate()', function() {
		it('should return 0 with no inputs', function() {
			calculate().should.equal(0);
		});

		it('should return 0 with a quantity', function () {
		    calculate(50).should.equal(0);
		});

		it('should return the sum of the fixed expenses', function () {
		    var fixed = [
				new FixedExpense(1),
				new FixedExpense(2),
				new FixedExpense(3)
		    ];
		    calculate(1, fixed).should.equal(6);
		});

		it('should return the sum of the variable expenses', function () {
		    var variable = [
				new VariableExpense(1),
				new VariableExpense(2),
				new VariableExpense(3)
		    ];
		    calculate(1, [], variable).should.equal(6);
		    calculate(2, [], variable).should.equal(12);
		})
	});
});