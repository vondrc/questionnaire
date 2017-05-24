'use strict';

import './styles/app.scss';
import angular from 'angular';
import uibootstrap from 'angular-ui-bootstrap'
import {default as AppConfig} from './app.config';
import {default as IntroModule} from './intro/intro.module';
import {default as QuestionnaireModule} from './questionnaire/questionnaire.module';
import {default as EndModule} from './end/end.module';

export default angular.module('myApp', [
    // vendor modules
    uibootstrap,

    // custom modules
    IntroModule.name,
    QuestionnaireModule.name,
    EndModule.name
]).config(AppConfig.routeConfig);