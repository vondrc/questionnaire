'use strict';

import {default as QuestionnaireController} from './questionnaire.controller';
import {default as QuestionnaireService} from './questionnaire.service'
import angular from 'npm/angular';
import ngRoute from 'npm/angular-route'

export default angular
    .module('myApp.questionnaire', [ngRoute])
    .service('QuestionnaireService', QuestionnaireService)
    .controller('QuestionnaireController', QuestionnaireController);