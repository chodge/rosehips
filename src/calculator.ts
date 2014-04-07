/// <reference path="./fixedExpense.ts"/>
/// <reference path="./variableExpense.ts"/>
/// <reference path="../defs/underscore.d.ts"/>
import fixed = require('./fixedExpense');
import variable = require('./variableExpense');
import _ = require('underscore');

export function calculate (fixed:Array<fixed.Expense>, variable:Array<variable.Expense>) : number {
	var fixedExpenses = _.reduce(fixed, function(exp) {
			return exp.amount();
		}, 0);

	return fixedExpenses;
}