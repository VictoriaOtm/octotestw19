import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters', '.dataset-letters')
	}

	get locators () {
		return {
			container: this.container
		}
	}
}

export default new LettersPage();
