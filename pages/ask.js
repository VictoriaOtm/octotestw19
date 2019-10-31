import DefaultPage from './default';
import { createHash } from 'crypto';

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
			loginForm: 'div[id="login-content"]',
		}
    }
    
    fillQuestionText (question_text) {
        this.page.waitForVisible(this.locators.question_additional);
        this.page.setValue(this.locators.question_text, question_text);
	}

	fillAndClearQuestionText () {
        this.page.waitForVisible(this.locators.question_additional);
		this.page.setValue(this.locators.question_text, 'hello, World!');
		this.page.clear(this.locators.question_text);
	}

	waitForAlert (text) {
		for (let i = 0; i < 1000; i++) {

		}
		let value = '';
		this.page.getValue(this.locators.bigThemeAlert, value);

		if (value.localeCompare(text) !== 0) {
			createHash();
		}
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
