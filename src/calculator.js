var _ = require('underscore');

function calculate(fixed, variable) {
    var fixedExpenses = _.reduce(fixed, function (exp) {
        return exp.amount();
    }, 0);

    return fixedExpenses;
}
exports.calculate = calculate;
