/// <reference path="./container.ts"/>
var container = require('./container');
var Container = container.Container;

var VariableExpense = (function () {
    function VariableExpense(name, unitCost, unit) {
        if (typeof name === "undefined") { name = ''; }
        if (typeof unitCost === "undefined") { unitCost = 0; }
        if (typeof unit === "undefined") { unit = new Container; }
        this.name = name;
        this.unitCost = unitCost;
        this.unit = unit;
    }
    VariableExpense.prototype.totalQuantity = function (quantity) {
        return quantity * this.unit.total();
    };

    VariableExpense.prototype.totalCost = function (quantity) {
        var containerQuantity = quantity / this.unit.total();
        return this.unitCost * containerQuantity;
    };
    return VariableExpense;
})();
exports.VariableExpense = VariableExpense;
