import DefaultSteps from './default';
import page from '../pages/contact';

class AddContactSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  addCorrect() {
    this.page.add();
    this.page.fillAddForm("Имя", "Фамилия", "nickname", "Компания", "pochta@mail.ru");
    this.page.save();
    this.page.return();
    this.page.waitCreate();
  }

  addWithWrongEmail() {
    this.page.add();
    this.page.fillAddForm("Имя", "Фамилия", "nickname", "Компания", "pochta");
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
