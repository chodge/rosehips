/// <reference path="fixedExpense.ts"/>
/// <reference path="variableExpense.ts"/>
var fixed = require('./fixedExpense');
var variable = require('./variableExpense');

var FixedExpense = fixed.FixedExpense, VariableExpense = variable.VariableExpense;

function calculate(fixed, variable) {
    return 1;
}
exports.calculate = calculate;
;
