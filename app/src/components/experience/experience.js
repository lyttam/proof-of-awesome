import angular from 'angular';
import experienceComponent from './experience.component';
import commonComponents from '../common/components';

let experienceModule = angular.module('experience', [
		'windowbar'
	])

	.component('experience', experienceComponent);

export default experienceModule;
