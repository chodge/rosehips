/// <reference path="fixedExpense.ts"/>
/// <reference path="variableExpense.ts"/>
import fixed = require('./fixedExpense');
import variable = require('./variableExpense');

export function calculate (fixed:Array<fixed.FixedExpense>, variable:Array<variable.VariableExpense>) : number {
	return 1;
};