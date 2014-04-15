(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fixed = require('./fixedExpense');
var calc = require('./calculator');

var calculate = calc.calculate;

var FixedExpense = fixed.FixedExpense;

var app = angular.module('rosehips', []);

app.controller('CalculatorCtl', function ($scope) {
    $scope.fixedExpenses = [
        new FixedExpense('Employee wages', 200),
        new FixedExpense('Facility rental', 45),
        new FixedExpense('Materials (paper, elastics...)', 20)
    ];
    $scope.variableExpenses = [];

    var containers = [];

    $scope.quantity = 200;
    $scope.unitPrice = 1.75;

    $scope.calculate = function () {
        $scope.totalPrice = calculate($scope.quantity, $scope.unitPrice, $scope.fixedExpenses, $scope.variableExpenses);
    };

    $scope.addFixed = function () {
        $scope.fixedExpenses.push(new FixedExpense('', 0));
    };

    $scope.calculate();
});

},{"./calculator":2,"./fixedExpense":4}],2:[function(require,module,exports){
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
        return memo + exp.totalCost;
    }, 0);

    var variableExpenses = reduce(variable, function (memo, exp) {
        return memo + exp.totalCost(quantity);
    }, 0);

    return price - (fixedExpenses + variableExpenses);
}
exports.calculate = calculate;
;

},{}],3:[function(require,module,exports){
var Container = (function () {
    function Container(_name, _qty, _unit) {
        if (typeof _name === "undefined") { _name = 'Stem'; }
        if (typeof _qty === "undefined") { _qty = 1; }
        if (typeof _unit === "undefined") { _unit = null; }
        this._name = _name;
        this._qty = _qty;
        this._unit = _unit;
    }
    Container.prototype.name = function () {
        return this._name;
    };

    Container.prototype.quantity = function () {
        return this._qty;
    };

    Container.prototype.unit = function () {
        return this._unit;
    };

    Container.prototype.total = function () {
        var multiplier = this._unit ? this._unit.total() : 1, total = multiplier * this._qty;

        return total;
    };
    return Container;
})();
exports.Container = Container;

},{}],4:[function(require,module,exports){
var FixedExpense = (function () {
    function FixedExpense(name, totalCost) {
        this.name = name;
        this.totalCost = totalCost;
    }
    return FixedExpense;
})();
exports.FixedExpense = FixedExpense;

},{}],5:[function(require,module,exports){
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
        return this.unitCost * this.totalQuantity(quantity);
    };
    return VariableExpense;
})();
exports.VariableExpense = VariableExpense;

},{"./container":3}]},{},[4,5,2,1]);