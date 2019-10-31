import DefaultSteps from './default';
import page from '../pages/ask';

class AskSteps extends DefaultSteps {
	constructor() {
		super(page);
    }
    
    writeQuestionText(text) {
        this.page.fillQuestionText(text);
    }

    waitForBigThemeAlert() {
        this.page.waitForBigThemeAlert();
    }
    
    fillAndCleanQuestionText() {
        this.page.fillAndCleanQuestionText();
    }

    waitForEmptyThemeAlert() {
        this.page.waitForEmptyThemeAlert();
    }

	waitForAsk() {
		this.page.waitForContainer();
    }
    
    pressLoginButton() {
        this.page.pressLoginButton();
    }
    
    waitForLoginForm() {
        this.page.waitForLoginForm();
    }

    fillAndCleanQuestionText() {
        this.page.fillAndCleanQuestionText();
    }

    waitForBigThemeAlert() {

    }
}

export default new AskSteps();
