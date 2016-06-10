import angular from 'angular';
import experienceComponent from './experience.component';

let experienceModule = angular.module('experience', [])

	.component('experience', experienceComponent);

export default experienceModule;
