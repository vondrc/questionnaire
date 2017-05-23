'use strict';

export default class IntroController {
    constructor($scope, $location) {
        'ngInject';
        $scope.changeView = (view) => {
            $location.path(view);
        }
    }
}