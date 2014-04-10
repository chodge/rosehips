var FixedExpense = (function () {
    function FixedExpense(_amount) {
        this._amount = _amount;
    }
    FixedExpense.prototype.totalCost = function () {
        return this._amount;
    };
    return FixedExpense;
})();
exports.FixedExpense = FixedExpense;
