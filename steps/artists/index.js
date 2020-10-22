import DefaultSteps from '../default';
import page from '../../pages/artists';

class ArtistsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForSelf() {
		this.page.waitForContainer();
	}

	clickArtistName () {
		this.page.clickArtistName();
	}

	clickAlbums() {
		this.page.clickAlbums();
		this.page.waitForAlbumsList();
	}
}

export default new ArtistsSteps();
