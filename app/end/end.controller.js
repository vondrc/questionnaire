'use strict';

export default class EndController {
    constructor($scope, $location, $timeout) {
        'ngInject';
        $scope.message = 'Děkujeme za účast';

        $timeout(() => {
            $location.path('intro');
        }, 5000);
    }
}