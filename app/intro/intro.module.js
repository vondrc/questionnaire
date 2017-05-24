'use strict';

import {default as IntroController} from './intro.controller';
import ngRoute from 'angular-route';

export default angular
    .module('myApp.intro', [ngRoute])
    .controller('IntroController', IntroController);