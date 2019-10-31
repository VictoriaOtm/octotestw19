import DefaultPage from './default';

class TopErrorMessage extends DefaultPage {
    constructor() {
        super('top-message', '.form__top-message.form__top-message_error');
    }
}

class FormErrorMessage extends DefaultPage {
    constructor(formSelector) {
        super(`${formSelector}-error-message`, formSelector);
    }
}

class SuggestItems extends DefaultPage {
    constructor() {
        super('suggest-items', '//*[@class="content__page"]/descendant::span[@class="div_inner ac-items form__field__suggest__inner"]');
    }
}

class UserinfoPage extends DefaultPage {
	constructor() {
        super('userinfo', '.content__page');
        this.topErrorMessage = new TopErrorMessage();
        this.townErrorMessage = new FormErrorMessage(this.locators.townMessageError);
        this.surnameErrorMessage = new FormErrorMessage(this.locators.surnameMessageError);
        this.suggestItems = new SuggestItems();
	}

	get locators() {
		return {
            town: 'input[name="your_town"]', 
            surname: 'input[name="LastName"]',            
            saveButton: 'div.form__actions__inner button[type="submit"]',
            topMessage: '.form__top-message.form__top-message_error',
            townMessageError: 'input[name="your_town"] ~ .form__message.form__message_error',
            surnameMessageError: 'input[name="LastName"] ~ .form__message.form__message_error', 
            suggestItems: '//*[@class="content__page"]/descendant::span[@class="div_inner ac-items form__field__suggest__inner"]',
		}
	}

	fillTownForm(townName) {
		this.page.waitForVisible(this.locators.town);
		this.page.click(this.locators.town);
		this.page.setValue(this.locators.town, townName);
    }

    fillSurnameForm(surname) {
		this.page.waitForVisible(this.locators.surname);
		this.page.click(this.locators.surname);
		this.page.setValue(this.locators.surname, surname);
    }

	save() {
		this.page.waitForEnabled(this.locators.saveButton);
		this.page.click(this.locators.saveButton);
	}
}

export default new UserinfoPage();
