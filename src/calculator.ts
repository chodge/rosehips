/// <reference path="fixedExpense.ts"/>
/// <reference path="variableExpense.ts"/>
import fixed = require('./fixedExpense');
import variable = require('./variableExpense');

var FixedExpense = fixed.FixedExpense,
	VariableExpense = variable.VariableExpense;

export function calculate (fixed:Array<FixedExpense>, variable:Array<VariableExpense>) : number {
	return 1;
};