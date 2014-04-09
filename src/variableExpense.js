/// <reference path="./container.ts"/>
var container = require('./container');

var Expense = (function () {
    function Expense(_unitCost, _unit) {
        if (typeof _unitCost === "undefined") { _unitCost = 0; }
        if (typeof _unit === "undefined") { _unit = new container.Container; }
        this._unitCost = _unitCost;
        this._unit = _unit;
    }
    Expense.prototype.totalQuantity = function (quantity) {
        return quantity * this._unit.total();
    };

    Expense.prototype.totalCost = function (quantity) {
        return this._unitCost * this.totalQuantity(quantity);
    };
    return Expense;
})();
exports.Expense = Expense;
