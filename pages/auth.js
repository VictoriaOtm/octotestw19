import DefaultPage from "./default";

class AuthPage extends DefaultPage {
    constructor() {
        super('auth', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            login: 'input[id="login"]',
            password: 'input[id="password"]',
            submitButton: '[id="submit-login"]',
        }
    }

    fillLoginForm(username) {
        this.page.waitForVisible(this.locators.login);
        this.page.click(this.locators.login);
        this.page.setValue(this.locators.login, username);
    }

    fillPasswordForm(password) {
        this.page.waitForVisible(this.locators.password);
        this.page.click(this.locators.password);
        this.page.setValue(this.locators.password, password);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }
}

export default new AuthPage();
