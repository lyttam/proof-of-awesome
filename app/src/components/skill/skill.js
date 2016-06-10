import angular from 'angular';
import skillComponent from './skill.component';

let skillModule = angular.module('skill', [])
	
	.component('skill', skillComponent);

export default skillModule;
