'use strict';

angular.module('myApp.questionnaire', ['ngRoute', 'myApp.questionnaireService'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/questionnaire', {
            templateUrl: 'questionnaire/questionnaire.html',
            controller: 'QuestionnaireCtrl'
        });
    }])

    .controller('QuestionnaireCtrl', ['$scope', '$location', 'questionnaireService', function ($scope, $location, questionnaireService) {

        $scope.ageCategories = questionnaireService.categories();
        $scope.activities = questionnaireService.activities();


        $scope.postForm = function (person, view) {
            questionnaireService.saveToStorage(person);
            $scope.changeView(view);
            $scope.reset();
        };

        $scope.reset = function () {
            $scope.person = {};
        };

        $scope.changeView = function (view) {
            $location.path(view);
        };

        $scope.reset();
    }]);