import angular from 'angular';
import aboutComponent from './about.component';
import commonComponents from '../common/components';

angular.module('about', [
		'windowbar',
		'styleLibrary'
	])

	.component('about', aboutComponent);
