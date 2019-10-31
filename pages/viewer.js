import DefaultPage from './default';

class ViewerPage extends DefaultPage {
	constructor() {
		super('account',  'body')
	}

	get locators() {
		return {
			container: this.container,
			closeAdModal: `${this.container} [class^="Dialog__close"]`,
			sliderItem: `${this.container} .b-slider__item`,
			shareButton: `${this.container} [data-name="publish"]`,
			shareModal: `${this.container} [data-qa-modal="publish"]`,
			addToFavouritesButton: `${this.container} [data-name="addtofavorites"]`,
			addToFavouritesButtonActive: `${this.container} [data-name="addtofavorites"] .ico_btn_favorites_active`,
		};
	}

	waitForLoaded() {
		const { sliderItem, closeAdModal } = this.locators;
		this.page.waitForVisible(sliderItem);
		this.page.waitForVisible(closeAdModal);
		this.page.click(closeAdModal);
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
}

export default new ViewerPage();
