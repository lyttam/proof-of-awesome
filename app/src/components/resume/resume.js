import angular from 'angular';
import resumeComponent from './resume.component';

let resumeModule = angular.module('resume', [])

	.component('resume', resumeComponent);

export default resumeModule;
