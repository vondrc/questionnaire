'use strict';

export default class QuestionnaireController {
    constructor($scope, $location, QuestionnaireService) {
        'ngInject';
        $scope.ageCategories = QuestionnaireService.getCategories();
        $scope.activities = QuestionnaireService.getActivities();


        $scope.postForm = (person, view) => {
            QuestionnaireService.saveToStorage(person);
            $scope.changeView(view);
            $scope.reset();
        };

        $scope.reset = () => {
            $scope.person = {};
        };

        $scope.changeView = (view) => {
            $location.path(view);
        };

        $scope.reset();
    }
}