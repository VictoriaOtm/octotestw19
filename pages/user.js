import DefaultPage from './default';

class UserPage extends DefaultPage {
	constructor() {
		super('login', 'div[id="application"]');
	}

	get locators() {
		return {
            subscribe_button: 'input[class="button-subscribe"]',
            unsubscribe_button: 'input[class="button-already-subscribe"]'
            
		}
    }
    
    toggle_subscribe_button_trusted (button_start, button_finish) {
        this.page.waitForVisible(button_start);
        this.page.click(button_start);
        this.page.waitForVisible(button_finish);
    }

    subscribe_trusted () {
        this.toggle_subscribe_button_trusted(this.locators.subscribe_button, this.locators.unsubscribe_button);
    }

    unsubscribe_trusted () {
        this.toggle_subscribe_button_trusted(this.locators.unsubscribe_button, this.locators.subscribe_button);

    }
}

export default new UserPage();
