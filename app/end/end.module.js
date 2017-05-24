'use strict';

import {default as EndController} from './end.controller';
import ngRoute from 'angular-route'

export default angular
    .module('myApp.end', [ngRoute])
    .controller('EndController', EndController);