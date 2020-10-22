import DefaultPage from '../default';

class AlbumsPage extends DefaultPage {
	constructor() {
		super('albums', '.l-main');
	}

	get locators () {
		return {
			container: this.container,
			likeButton: '.m-large-like-button',
			likeButtonCLicked: '.m-large-like-button.is-liked',
			trackList: '.l-track-list',
			firstTrack: '.l-track-big',
			albums: '#profile-albums-title',
			albumsList: '#artist-albums',
			firstAlbum: '.l-list-card',
			successNotification: '.m-pop-up-message',
		}
	}

	clickLike () {
		this.page.waitForVisible(this.locators.likeButton);
		this.page.click(this.locators.likeButton);
	}

	clickFirstAlbum () {
		this.page.waitForVisible(this.locators.firstAlbum);
		this.page.click(this.locators.firstAlbum);
	}

	waitForFirstAlbum() {
		this.page.waitForVisible(this.locators.firstAlbum);
	}

	waitForNotification() {
		this.page.waitForVisible(this.locators.successNotification);
	}

	waitForLikeClicked() {
		this.page.waitForVisible(this.locators.likeButtonCLicked);
	}
}

export default new AlbumsPage();
