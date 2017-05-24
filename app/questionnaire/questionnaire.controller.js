'use strict';

export default class QuestionnaireController {
    constructor($scope, $location, QuestionnaireService) {
        'ngInject';
        this.$location = $location;
        this.$scope = $scope;
        this.QuestionnaireService = QuestionnaireService;
        $scope.ageCategories = QuestionnaireService.getCategories();
        $scope.activities = QuestionnaireService.getActivities();
        this.reset();
    }

    postForm(person, view) {
        this.QuestionnaireService.saveToStorage(person);
        this.changeView(view);
        this.reset();
    }

    reset() {
        this.$scope.person = {};
    }

    changeView(view) {
        this.$location.path(view);
    };
}