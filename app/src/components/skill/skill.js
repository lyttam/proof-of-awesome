import angular from 'angular';
import skillComponent from './skill.component';
import commonComponents from '../common/components';

let skillModule = angular.module('skill', [
		'windowbar',
		'tile'
	])
	
	.component('skill', skillComponent);

export default skillModule;
