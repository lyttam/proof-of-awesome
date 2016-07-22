import angular from 'angular';

export default function SkillController($element) {

	this.toggles = $element[0].querySelectorAll('.toggle');

	this.$postLink = () => {
		for (let i = 0; i < this.toggles.length; i++) {
			this.toggles[i].addEventListener('click', this.handleClick);
			this.toggles[i].addEventListener('mouseover', this.handleHover);
		}
	};

	this.handleClick = (e) => {
		e.preventDefault();
		this.blurAll();
		e.target.focus();
	};

	this.handleHover = (e) => {
		this.blurAll();
	};

	this.blurAll = () => {
		for (let i = 0; i < this.toggles.length; i++) {
			this.toggles[i].blur();
		}
	};
};
