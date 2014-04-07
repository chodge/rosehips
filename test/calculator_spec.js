var should = require('should'),
	calculate = require('../src/calculator').calculate,
	FixedExpense = require('../src/fixedExpense').Expense;

describe('Calculator', function() {
	describe('#calculate()', function() {
		it('should return 0 with no inputs', function() {
			calculate().should.equal(0);
		});

		it('should return the sum of the fixed expenses', function() {
			var fixed = [
				new FixedExpense(1),
				new FixedExpense(2),
				new FixedExpense(3)
			];
			calculate(fixed).should.equal(6);
		})
	});
});