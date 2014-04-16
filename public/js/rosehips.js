(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///<reference path="./variableExpense.ts"/>
///<reference path="./fixedExpense.ts"/>
///<reference path="./container.ts"/>
///<reference path="./calculator.ts"/>
///<reference path="../defs/angular/angular.d.ts"/>
var variable = require('./variableExpense');
var fixed = require('./fixedExpense');
var container = require('./container');
var calc = require('./calculator');

var calculate = calc.calculate;
var VariableExpense = variable.VariableExpense;
var FixedExpense = fixed.FixedExpense;
var Container = container.Container;

var app = angular.module('rosehips', []);

app.controller('CalculatorCtl', function ($scope) {
    $scope.fixedExpenses = [
        new FixedExpense('Employee wages', 200),
        new FixedExpense('Facility rental', 45),
        new FixedExpense('Materials (paper, elastics...)', 20)
    ];

    var stem = new Container('Stem', 1), pail = new Container('Pail', 50, stem), cart = new Container('Cart', 10, pail), truck = new Container('Truck', 4, cart);
    $scope.containers = [
        stem,
        pail,
        cart,
        truck
    ];

    $scope.variableExpenses = [
        new VariableExpense('Bucket Deposit', 2.5, pail),
        new VariableExpense('Cart Charge', 5, cart),
        new VariableExpense('Transport Cost', 45, truck)
    ];

    $scope.quantity = 200;
    $scope.unitPrice = 1.75;

    $scope.calculate = function () {
        $scope.totalPrice = calculate($scope.quantity, $scope.unitPrice, $scope.fixedExpenses, $scope.variableExpenses);
    };

    $scope.addFixed = function () {
        $scope.fixedExpenses.push(new FixedExpense('', 0));
    };

    $scope.addVariable = function () {
        $scope.variableExpenses.push(new VariableExpense('', 0, stem));
    };

    $scope.calculate();
});

},{"./calculator":2,"./container":3,"./fixedExpense":4,"./variableExpense":5}],2:[function(require,module,exports){
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
    function Container(name, quantity, unit) {
        if (typeof name === "undefined") { name = 'Stem'; }
        if (typeof quantity === "undefined") { quantity = 1; }
        if (typeof unit === "undefined") { unit = null; }
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
    Container.prototype.total = function () {
        var multiplier = this.unit ? this.unit.total() : 1, total = multiplier * this.quantity;

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
        var containerQuantity = quantity / this.unit.total();
        return this.unitCost * containerQuantity;
    };
    return VariableExpense;
})();
exports.VariableExpense = VariableExpense;

},{"./container":3}]},{},[4,5,2,1]);