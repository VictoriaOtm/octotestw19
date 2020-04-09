import page from '../pages/account';
import DefaultSteps from './default';

class AccountSteps extends DefaultSteps {
  constructor () {
    super(page);
  }

  auth () {
    this.open('http://tripway.ru.com/signin');
    this.waitForAccount();
    this.login();
  }

  login () {
    this.page.fillLoginForm(process.env.LOGIN);
    this.page.fillPasswordForm(process.env.PASSWORD);
    this.page.submit();
    this.page.refresh();
    this.page.checkProfileIcon();
  }

  waitForAccount () {
    this.page.waitForContainer();
  }
}

export default new AccountSteps();
