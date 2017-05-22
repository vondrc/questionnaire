'use strict';
angular.module('myApp.end', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/end', {
            templateUrl: 'end/end.html',
            controller: 'EndCtrl'
        });
    }])

    .controller('EndCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.message = 'Děkujeme za účast';
    }]);