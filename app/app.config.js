'use strict';

export default class AppConfig {
    /* @ngInject */
    static routeConfig($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/intro', {
                templateUrl: 'app/intro/intro.html',
                controller: 'IntroController as ctrl'
            })
            .when('/questionnaire', {
                templateUrl: 'app/questionnaire/questionnaire.html',
                controller: 'QuestionnaireController as ctrl'
            })
            .when('/end', {
                templateUrl: 'app/end/end.html',
                controller: 'EndController as ctrl'
            })
            .otherwise({redirectTo: '/intro'});
    }
}