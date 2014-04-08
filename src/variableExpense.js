var Expense = (function () {
    function Expense(_amount) {
        this._amount = _amount;
    }
    Expense.prototype.amount = function (quantity) {
        return quantity * this._amount;
    };
    return Expense;
})();
exports.Expense = Expense;
