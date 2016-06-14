import angular from 'angular';

let chai = require('chai');

describe('app module', () => {
	var $compile,
		$rootScope;

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject( function(_$rootScope_, _$compile_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('renders the app component', () => {
		var element = $compile('<app></app>')($rootScope);

		$rootScope.$digest();

		expect(element.html()).to.have.string('<div class="app">');
		expect(element.html()).to.have.string('<nav-menu class="ng-isolate-scope">');
		
		expect(element.html()).to.have.string('href="./"');
		expect(element.html()).to.have.string('ng-link="[\'Home\']"');
		expect(element.html()).to.have.string('href="./about/"');
		expect(element.html()).to.have.string('ng-link="[\'About\']"');
		expect(element.html()).to.have.string('href="./experience/"');
		expect(element.html()).to.have.string('ng-link="[\'Experience\']"');
		expect(element.html()).to.have.string('href="./skill/"');
		expect(element.html()).to.have.string('ng-link="[\'Skill\']"');
		expect(element.html()).to.have.string('href="./contact/"');
		expect(element.html()).to.have.string('ng-link="[\'Contact\']"');
	
		expect(element.html()).to.have.string('<ng-outlet class="ng-scope"><home');

		expect(element.html()).to.have.string('<function-menu class="ng-isolate-scope">');
	});
});
