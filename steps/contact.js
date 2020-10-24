import DefaultSteps from './default';
import page from '../pages/contact';

class AddContactSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  addCorrect(firstName, lastName, nickname, company, email) {
    this.page.add();
    this.page.fillAddForm(firstName, lastName, nickname, company, email);
    this.page.save();
    this.page.return();
    this.page.waitCreate();
  }

  addWithWrongEmail(firstName, lastName, nickname, company, email) {
    this.page.add();
    this.page.fillAddForm(firstName, lastName, nickname, company, email);
    this.page.save();
    this.page.waitEmailError();
  }

  addEmpty() {
    this.page.add();
    this.page.save();
    this.page.waitEmptyError();
  }
}

export default new AddContactSteps();
