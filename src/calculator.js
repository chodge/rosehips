function reduce(ary, iter, initial) {
    var returnValue = initial;

    for (var i = 0; i < ary.length; i++) {
        var obj = ary[i], result = iter(initial, obj);

        returnValue += result;
    }

    return returnValue;
}

function calculate(fixed, variable) {
    var fixedExpenses = fixed ? reduce(fixed, function (memo, exp) {
        return memo + exp.amount();
    }, 0) : 0;

    return fixedExpenses;
}
exports.calculate = calculate;
