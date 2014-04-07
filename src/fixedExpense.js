var Expense = (function () {
    function Expense(amount) {
        this._amount = amount;
    }
    Expense.prototype.amount = function () {
        return this._amount;
    };
    return Expense;
})();
exports.Expense = Expense;
