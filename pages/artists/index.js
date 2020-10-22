import DefaultPage from '../default';

class ArtistsPage extends DefaultPage {
	constructor() {
		super('artists', '.l-content.row')
	}

	get locators () {
		return {
			container: this.container,
			trackList: '.l-track-list',
			firstTrackArtistName: '.l-track-list .m-obscure-title.m-tiny-ref.m-small-text.is-underlined-ref',
			albums: '#profile-albums-title',
			albumsList: '#artist-albums',
			firstAlbum: '.l-list-card',
			successNotification: '.m-pop-up-message',
		}
	}

	clickArtistName() {
		this.page.waitForVisible(this.locators.firstTrackArtistName);
		this.page.click(this.locators.firstTrackArtistName);
	}

	clickAlbums () {
		this.page.waitForVisible(this.locators.albumsList);
		this.page.click(this.locators.albumsList);
	}

	waitForAlbumsList() {
		this.page.waitForVisible(this.locators.albumsList);
	}
}

export default new ArtistsPage();
