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
        new VariableExpense('Bucket Deposit', 2, pail),
        new VariableExpense('Cart Charge', 5, cart),
        new VariableExpense('Transport Cost', 45, truck)
    ];

    $scope.quantity = 20;
    $scope.unitPrice = 1.75;
    $scope.unit = pail;

    $scope.calculate = function () {
        var quantity = $scope.unit.total() * $scope.quantity;
        $scope.revenue = quantity * $scope.unitPrice;
        $scope.totalProfit = calculate(quantity, $scope.unitPrice, $scope.fixedExpenses, $scope.variableExpenses);
        $scope.unitProfit = $scope.totalProfit / quantity;
    };

    $scope.addFixed = function () {
        $scope.fixedExpenses.push(new FixedExpense('', 0));
    };

    $scope.addVariable = function () {
        $scope.variableExpenses.push(new VariableExpense('', 0, stem));
    };

    $scope.addContainer = function () {
        $scope.containers.push(new Container('', 1, stem));
    };

    $scope.calculate();
});
