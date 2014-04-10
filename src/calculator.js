function reduce(ary, iter, initial) {
    var returnValue = initial;

    for (var i = 0; i < ary.length; i++) {
        var obj = ary[i], result = iter(initial, obj);

        returnValue += result;
    }

    return returnValue;
}

function calculate(quantity, unitPrice, fixed, variable) {
    if (typeof quantity === "undefined") { quantity = 0; }
    if (typeof unitPrice === "undefined") { unitPrice = 0; }
    if (typeof fixed === "undefined") { fixed = []; }
    if (typeof variable === "undefined") { variable = []; }
    var price = quantity * unitPrice;

    var fixedExpenses = reduce(fixed, function (memo, exp) {
        return memo + exp.totalCost();
    }, 0);

    var variableExpenses = reduce(variable, function (memo, exp) {
        return memo + exp.totalCost(quantity);
    }, 0);

    return price - (fixedExpenses + variableExpenses);
}
exports.calculate = calculate;
;
