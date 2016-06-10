import angular from 'angular';
import windowbarComponent from './window-bar.component';

let windowbarModule = angular.module('windowbar', [])
	.component('windowbar', windowbarComponent);

export default windowbarModule;
