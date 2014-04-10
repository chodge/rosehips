var app = angular.module('rosehips', []);

app.controller('CalculatorCtl', function ($scope) {
    $scope.fixedExpenses = [];
    $scope.variableExpenses = [];
    $scope.quantity = 200;
    $scope.unitPrice = 1.75;
});