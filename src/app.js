var fixed = require('./fixedExpense');
var calc = require('./calculator');

var calculate = calc.calculate;

var FixedExpense = fixed.FixedExpense;

var app = angular.module('rosehips', []);

app.controller('CalculatorCtl', function ($scope) {
    $scope.fixedExpenses = [
        new FixedExpense('Employee wages', 200)
    ];
    $scope.variableExpenses = [];
    $scope.quantity = 200;
    $scope.unitPrice = 1.75;

    $scope.calculate = function () {
        $scope.totalPrice = calculate($scope.quantity, $scope.unitPrice, $scope.fixedExpenses, $scope.variableExpenses);
    };

    $scope.calculate();
});
