///<reference path="./variableExpense.ts"/>
///<reference path="./fixedExpense.ts"/>
///<reference path="./calculator.ts"/>
///<reference path="../defs/angular/angular.d.ts"/>
import variable = require('./variableExpense');
import fixed = require('./fixedExpense');
import calc = require('./calculator');

import calculate = calc.calculate;
import VariableExpense = variable.VariableExpense;
import FixedExpense = fixed.FixedExpense;

var app = angular.module( 'rosehips', [] );

app.controller('CalculatorCtl', function ($scope) {
    $scope.fixedExpenses = [
        new FixedExpense('Employee wages', 200),
        new FixedExpense('Facility rental', 45),
        new FixedExpense('Materials (paper, elastics...)', 20)
    ];
    $scope.variableExpenses = [

    ];

    var containers = [

    ];

    $scope.quantity = 200;
    $scope.unitPrice = 1.75;

    $scope.calculate = function() {
        $scope.totalPrice = calculate($scope.quantity, $scope.unitPrice, $scope.fixedExpenses, $scope.variableExpenses);   
    };

    $scope.addFixed = function() {
        $scope.fixedExpenses.push(new FixedExpense('', 0));
    };

    $scope.calculate();
});