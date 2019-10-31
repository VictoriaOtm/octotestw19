import DefaultPage from './default';

class PhonePage extends DefaultPage {
	constructor() {
        super('Phone', '.CheckUpPanel-mobile__auto--3UlCc')
	}

	get locators() {
		return {
            newPhonePage: 'div [data-test-id=expansion-item-header-text]'
		}
    }
    
	findPhonePageSelector() {
		this.page.waitForEnabled(this.locators.newPhonePage);
    }

}

export default new PhonePage();
