import angular from 'angular';
import functionMenuComponent from './function-menu.component';

let functionMenuModule = angular.module('functionMenu', [])

	.component('functionMenu', functionMenuComponent);

export default functionMenuModule;
