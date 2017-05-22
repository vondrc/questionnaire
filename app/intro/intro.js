'use strict';
angular.module('myApp.intro', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/intro', {
            templateUrl: 'intro/intro.html',
            controller: 'IntroCtrl'
        });
    }])

    .controller('IntroCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.changeView = function (view) {
            $location.path(view);
        }
    }]);