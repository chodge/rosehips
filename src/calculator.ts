/// <reference path="./fixedExpense.ts"/>
/// <reference path="./variableExpense.ts"/>
/// <reference path="../defs/underscore.d.ts"/>
import fixed = require('./fixedExpense');
import variable = require('./variableExpense');

function reduce<TType>(ary: Array<TType>, iter: (memo: number, obj: TType) => number, initial: number) {
    var returnValue: number = initial;

    for (var i: number = 0; i < ary.length; i++) {
        var obj: TType = ary[i],
            result = iter(initial, obj);

        returnValue += result;
    }

    return returnValue;
}


export function calculate(quantity:number = 0, fixed: Array<fixed.Expense> = [], variable: Array<variable.Expense> = []): number {
    var fixedExpenses = reduce(fixed, function(memo, exp) {
		return memo + exp.amount();
    }, 0);

    var variableExpenses = reduce(variable, function (memo, exp) {
        return memo + exp.amount(quantity);
    }, 0);

	return fixedExpenses + variableExpenses;
}