import DefaultSteps from './default';
import page from '../pages/artists';

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
}

export default new ArtistsSteps();
