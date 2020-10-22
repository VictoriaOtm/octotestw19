import DefaultPage from './default';

class AddContactPage extends DefaultPage {
  constructor() {
    super('contact', '[data-test-id=login-app-read]')
  }

  get locators() {
    return {
      addButton: '[data-test-id="add-contact"]',
      firstName: 'input[name="contacts[0].name.first"]',
      lastName: 'input[name="contacts[0].name.last"]',
      nickname: 'input[name="contacts[0].nick"]',
      company: 'input[name="contacts[0].company"]',
      email: 'input[name="contacts[0].emails[0]"]',
      saveButton: '[data-test-id="submit"]',
      returnButton: '[data-test-id="addressbook-back"]',
      item: '[data-test-id^="addressbook-user-item"]',
      emailError: '[data-test-id="invalid"]',
      emptyError: '[data-test-id="edit-contact-error"]',
    }
  }

  add() {
    this.page.waitForVisible(this.locators.addButton);
    this.page.click(this.locators.addButton);
  }

  fillAddForm(firstName, lastName, nickname, company, email) {
    this.page.waitForVisible(this.locators.firstName);
    this.page.click(this.locators.firstName);
    this.page.setValue(this.locators.firstName, firstName);

    this.page.waitForVisible(this.locators.lastName);
    this.page.click(this.locators.lastName);
    this.page.setValue(this.locators.lastName, lastName);

    this.page.waitForVisible(this.locators.nickname);
    this.page.click(this.locators.nickname);
    this.page.setValue(this.locators.nickname, nickname);

    this.page.waitForVisible(this.locators.company);
    this.page.click(this.locators.company);
    this.page.setValue(this.locators.company, company);

    this.page.waitForVisible(this.locators.email);
    this.page.click(this.locators.email);
    this.page.setValue(this.locators.email, email);
  }

  save() {
    this.page.waitForVisible(this.locators.saveButton);
    this.page.click(this.locators.saveButton);
  }

  return() {
    this.page.waitForVisible(this.locators.returnButton);
    this.page.click(this.locators.returnButton);
  }

  waitCreate() {
    this.page.waitForVisible(this.locators.item);
  }

  waitEmailError() {
    this.page.waitForVisible(this.locators.emailError);
  }

  waitEmptyError() {
    this.page.waitForVisible(this.locators.emptyError);
  }
}

export default new AddContactPage();
