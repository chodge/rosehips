var should = require('should'),
	calculate = require('../src/calculator').calculate,
	FixedExpense = require('../src/fixedExpense').FixedExpense,
	VariableExpense = require('../src/variableExpense').VariableExpense;

describe('Calculator', function() {
	describe('#calculate()', function() {
		it('should return 0 with no inputs', function() {
			calculate().should.equal(0);
		});

		it('should return 0 with a quantity', function () {
		    calculate(50).should.equal(0);
		});

		it('should return the unit price without expenses', function () {
		    calculate(2, 50).should.equal(100);
		});

		it('should return the sum of the fixed expenses', function () {
		    var fixed = [
				new FixedExpense('One', 1),
				new FixedExpense('Two', 2),
				new FixedExpense('Three', 3)
		    ];
		    calculate(1, 25, fixed).should.equal(19);
		});

		it('should return the sum of the variable expenses', function () {
		    var variable = [
				new VariableExpense(1),
				new VariableExpense(2),
				new VariableExpense(3)
		    ];
		    calculate(1, 100, [], variable).should.equal(94);
		    calculate(2, 100, [], variable).should.equal(188);
		})
	});
});