import DefaultPage from './default';

class ArtistsPage extends DefaultPage {
	constructor() {
		super('artists', '.l-content.row')
	}

	get locators () {
		return {
			container: this.container,
			firstTrackArtistName: '.l-track-list .m-obscure-title.m-tiny-ref.m-small-text.is-underlined-ref',
		}
	}

	clickArtistName() {
		this.page.waitForVisible(this.locators.firstTrackArtistName);
		this.page.click(this.locators.firstTrackArtistName);
	}
}

export default new ArtistsPage();
