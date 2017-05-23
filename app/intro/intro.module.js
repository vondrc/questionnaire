'use strict';

import {default as IntroController} from './intro.controller';
import angular from 'npm/angular';
import ngRoute from 'npm/angular-route'

export default angular
    .module('myApp.intro', [ngRoute])
    .controller('IntroController', IntroController);