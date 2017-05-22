'use strict';
angular.module('myApp', [
    'ngRoute',
    'myApp.intro',
    'myApp.questionnaire',
    'myApp.end',
    'ui.bootstrap'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/intro'});
}]);