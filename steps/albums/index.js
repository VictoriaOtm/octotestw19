import DefaultSteps from '../default';
import page from '../../pages/albums';

class AlbumsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForSelf() {
		this.page.waitForContainer();
	}

	clickLike() {
		this.page.clickLike();
		this.page.waitForLikeClicked();
		this.page.waitForNotification();
	}

	clickFirstAlbum() {
		this.page.clickFirstAlbum();
	}
}

export default new AlbumsSteps();
