require('./intro.module');
require('./intro.controller');

describe('Intro controller', function () {

    var $controller, $rootScope, $scope;

    beforeEach(function () {
        angular.mock.module('myApp.intro');
        inject(function (_$controller_, _$rootScope_, _$location_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $location = _$location_;
            $scope = $rootScope.$new();
            $controller('IntroController', {$scope: $scope});
        });
    });

    it('should change url path', function () {
        $scope.changeView('questionaire');
        expect($location.path()).toBe('/questionaire');
    });
});