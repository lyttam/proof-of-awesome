import angular from 'angular';

let chai = require('chai');

describe('windowbar component', () => {
	var component;

	beforeEach(angular.mock.module('windowbar'));

	describe('windowbarController', () => {
		var $componentController,
			element,
			$scope;

		beforeEach(angular.mock.inject(($rootScope, _$componentController_) => {
			$scope = $rootScope.$new();
			element = angular.element('<windowbar title="Skill" class="ng-isolate-scope"><header><a ui-sref="home" tabindex="0" href="#/">-</a><h1 class="window-title ng-binding">Skill</h1><span></span></header></windowbar>');
			$componentController = _$componentController_;
		}));

		it('sets the title', () => {
			component = $componentController(
					'windowbar',
					{
						$scope: {
							windowbar: {title: 'test'}
						},
						$element: element
					});
			expect(component.title).to.equal('test');
		});
	});
});
