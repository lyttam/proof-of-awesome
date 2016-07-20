export default function ContactController($element) {
	this.$postLink = function() {
		let focusables = $element[0].querySelectorAll('ul.social-media a, ul.social-media input');

		for (let i = 0; i < focusables.length; i++) {
			this.bindFocusInEvents(focusables[i]);
			this.bindFocusOutEvents(focusables[i]);
		}
	};

	this.bindFocusInEvents = (el) => {
		el.onfocus = this.displayFocusableContainer;
	};

	this.bindFocusOutEvents = (el) => {
		el.onblur = this.hideFocusableContainer;
	};

	this.displayFocusableContainer = (e) => {
		let container = angular.element(e.target).parent();
		container.addClass('visible');
	};

	this.hideFocusableContainer = (e) => {
		let container = angular.element(e.target).parent();
		container.removeClass('visible');
	};
};
