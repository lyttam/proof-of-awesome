export default function ContactController($element) {
	this.$postLink = function() {
		let focusables = $element[0].querySelectorAll('ul.social-media a, ul.social-media input');

		for (let i = 0; i < focusables.length; i++) {
			focusables[i].onfocusin = this.displayFocusableContainer;
			if (focusables[i].addEventListener) {
				focusables[i].addEventListener('focus', this.displayFocusableContainer, true);
				focusables[i].addEventListener('DOMFocusIn', this.displayFocusableContainer, true);
			}
		}
	};

	this.displayFocusableContainer = (e) => {
		let container = angular.element(e.target).parent();
		container.addClass('visible');
	};
};
