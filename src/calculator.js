function reduce(ary, iter, initial) {
    var returnValue = initial;

    for (var i = 0; i < ary.length; i++) {
        var obj = ary[i], result = iter(initial, obj);

        returnValue += result;
    }

    return returnValue;
}

function calculate(quantity, fixed, variable) {
    if (typeof quantity === "undefined") { quantity = 0; }
    if (typeof fixed === "undefined") { fixed = []; }
    if (typeof variable === "undefined") { variable = []; }
    var fixedExpenses = reduce(fixed, function (memo, exp) {
        return memo + exp.amount();
    }, 0);

    var variableExpenses = reduce(variable, function (memo, exp) {
        return memo + exp.amount(quantity);
    }, 0);

    return fixedExpenses + variableExpenses;
}
exports.calculate = calculate;
