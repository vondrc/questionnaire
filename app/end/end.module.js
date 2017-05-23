'use strict';

import {default as EndController} from './end.controller';
import angular from 'npm/angular';
import ngRoute from 'npm/angular-route'

export default angular
    .module('myApp.end', [ngRoute])
    .controller('EndController', EndController);