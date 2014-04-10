/// <reference path="./fixedExpense.ts"/>
/// <reference path="./variableExpense.ts"/>
/// <reference path="../defs/underscore.d.ts"/>
import fixed = require('./fixedExpense');
import variable = require('./variableExpense');

import FixedExpense = fixed.FixedExpense;
import VariableExpense = variable.VariableExpense;

function reduce<TType>(ary: Array<TType>, iter: (memo: number, obj: TType) => number, initial: number) {
    var returnValue: number = initial;

    for (var i: number = 0; i < ary.length; i++) {
        var obj: TType = ary[i],
            result = iter(initial, obj);

        returnValue += result;
    }

    return returnValue;
}

export function calculate(quantity: number = 0, unitPrice: number = 0, fixed: Array<FixedExpense> = [], variable: Array<VariableExpense> = []): number {

    var price = quantity * unitPrice;

    var fixedExpenses = reduce(fixed, function (memo, exp) {
        return memo + exp.totalCost();
    }, 0);

    var variableExpenses = reduce(variable, function (memo, exp) {
        return memo + exp.totalCost(quantity);
    }, 0);

	return price - (fixedExpenses + variableExpenses);
};