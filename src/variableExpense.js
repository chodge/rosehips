/// <reference path="./container.ts"/>
var container = require('./container');

var VariableExpense = (function () {
    function VariableExpense(_unitCost, _unit) {
        if (typeof _unitCost === "undefined") { _unitCost = 0; }
        if (typeof _unit === "undefined") { _unit = new container.Container; }
        this._unitCost = _unitCost;
        this._unit = _unit;
    }
    VariableExpense.prototype.totalQuantity = function (quantity) {
        return quantity * this._unit.total();
    };

    VariableExpense.prototype.totalCost = function (quantity) {
        return this._unitCost * this.totalQuantity(quantity);
    };
    return VariableExpense;
})();
exports.VariableExpense = VariableExpense;
