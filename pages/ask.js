import DefaultPage from './default';

class AskPage extends DefaultPage {
	constructor() {
		super('ask', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
			question_text: 'textarea[name="question_text"]',
			question_additional: 'textarea[name="question_additional"]',
			bigThemeAlert: 'div[class="z1LfJpugzE39YVXERE-f__0"]',
			loginButton: 'a[xname="clb951827"]',
			loginForm: 'input[name="Login"]',
		}
    }
    
    fillQuestionText (question_text) {
        this.page.waitForVisible(this.locators.question_additional);
        this.page.setValue(this.locators.question_text, question_text);
	}

	fillAndCleanQuestionText () {
        this.page.waitForVisible(this.locators.question_additional);
		this.page.setValue(this.locators.question_text, 'hello, World!');
	}

	waitForBigThemeAlert () {
        this.page.waitForVisible(this.locators.bigThemeAlert);
	}

	waitForEmptyThemeAlert () {
        this.page.waitForVisible(this.locators.bigThemeAlert);
	}

	pressLoginButton() {
        this.page.waitForVisible(this.locators.loginButton);
        this.page.click(this.locators.loginButton);
	}

	waitForLoginForm() {
		this.page.waitForVisible(this.locators.loginForm);
	}
}

export default new AskPage();
