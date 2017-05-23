'use strict';

import './styles/app.scss';
import angular from 'npm/angular';
import uibootstrap from 'npm/angular-ui-bootstrap'
import {default as AppConfig} from './app.config';
import {default as IntroModule} from './intro/intro.module';
import {default as QuestionnaireModule} from './questionnaire/questionnaire.module';
import {default as EndModule} from './end/end.module';

angular.module('myApp', [
    // vendor modules
    uibootstrap,

    // custom modules
    IntroModule.name,
    QuestionnaireModule.name,
    EndModule.name
]).config(AppConfig.routeConfig);