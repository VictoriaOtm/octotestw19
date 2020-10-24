import DefaultPage from './default';
import {mainURL} from "../store";

let assert = require('assert');

class AlbumsPage extends DefaultPage {
	constructor() {
		super('albums', '.l-main');
	}

	get locators () {
		return {
			container: this.container,
			likeButton: '.m-large-like-button',
			likeButtonClicked: '.m-large-like-button.is-liked',
			firstAlbum: '.l-list-card',
			successNotification: '.m-pop-up-message',
			avatar: '#avatar',
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
		assert.equal(
			$(this.locators.successNotification).getText(),
			'Альбом отмечен как понравившийся'
		);
	}

	waitForLikeClicked() {
		this.page.waitForVisible(this.locators.likeButtonClicked);
	}

	waitForAlbumsPage() {
		this.page.waitForVisible(this.locators.likeButton);
		assert.equal(
			$(this.locators.avatar).getAttribute('src'),
			mainURL+'/static/img/album/best-hits.jpg'
		);
	}
}

export default new AlbumsPage();
