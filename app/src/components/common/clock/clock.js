import angular from 'angular';
import ClockComponent from './clock.component';

let clockModule = angular.module('clock', [])

	.component('clock', ClockComponent);

export default clockModule;
