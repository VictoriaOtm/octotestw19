import DefaultPage from './default';

class UserPage extends DefaultPage {
	constructor() {
		super('login', 'div[id="applicationHeader"]');
	}

	get locators() {
		return {
            search_line: 'input[name="searchtext"]',
            search_type_username: 'option[value="Username"]',
            search_form: 'form[id="headerSearch"]',
		}
    }
    
    perform_search_users (user) {
        this.page.waitForVisible(this.locators.search_line);
        this.page.setValue(this.locators.search_line, user);
        this.page.click(this.locators.search_type_username);
        this.page.submitForm(this.locators.search_form);
    }
}

export default new UserPage();
