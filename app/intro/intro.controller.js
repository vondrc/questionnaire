'use strict';

export default class IntroController {
    constructor($scope, $location) {
        'ngInject';
        this.$scope = $scope;
        this.$location = $location;
    }

    changeView(view) {
        this.$location.path(view);
    }
}