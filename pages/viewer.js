import DefaultPage from './default';

class ViewerPage extends DefaultPage {
	constructor() {
		super('account',  'body')
	}

	get locators() {
		return {
			container: this.container,
			sliderItem: `${this.container} .b-slider__item`,
			shareButton: `${this.container} [data-name="publish"]`,
			shareModal: `${this.container} [data-qa-modal="publish"]`,
			addToFavouritesButton: `${this.container} [data-name="addtofavorites"]`,
			addToFavouritesButtonActive: `${this.container} [data-name="addtofavorites"] .ico_btn_favorites_active`,

			downBar: `${this.container} .b-viewer__toolbox`,
			downBarExpanded: `${this.container} .b-viewer__toolbox__content`,
		};
	}

	waitForLoaded() {
		const { sliderItem } = this.locators;
		this.page.waitForVisible(sliderItem);
	}

	clickShare() {
		const { shareButton } = this.locators;
		this.page.waitForVisible(shareButton);
		this.page.click(shareButton);
	}

	waitForShareModalOpened() {
		const { shareModal } = this.locators;
		this.page.waitForVisible(shareModal);
	}

	clickFavourite() {
		const { addToFavouritesButton } = this.locators;
		this.page.waitForVisible(addToFavouritesButton);
		this.page.click(addToFavouritesButton);
	}

	waitForFavourite() {
		const { addToFavouritesButtonActive } = this.locators;
		this.page.waitForVisible(addToFavouritesButtonActive);
	};

	expandDownBar() {
		const { downBar } = this.locators;
		this.page.waitForVisible(downBar);
		this.page.click(downBar);
	}

	waitForExpanded() {
		const { downBarExpanded } = this.locators;
		this.page.waitForVisible(downBarExpanded);
	}
}

export default new ViewerPage();
