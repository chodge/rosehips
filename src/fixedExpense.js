var Expense = (function () {
    function Expense(_amount) {
        this._amount = _amount;
    }
    Expense.prototype.totalCost = function () {
        return this._amount;
    };
    return Expense;
})();
exports.Expense = Expense;
