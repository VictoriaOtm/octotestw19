import DefaultSteps from './default';
import page from '../pages/userinfo';

class UserinfoSteps extends DefaultSteps {
    constructor() {
		super(page);
    }
    
    changeData(newFirstName) {
        this.page.fillFirstNameForm(newFirstName);
        this.page.submit();
        this.page.waitForUrl('https://e.mail.ru/settings?result=ok&afterReload=1');
    }

    goToHelpPage() {
      this.page.waitForHelpButton();
      // browser.switchTab();
      this.page.clickHelpButton();

      // this.page.checkHelpPage();
    }

    clickBirthDate() {
      this.page.clickBirthDate();
      this.page.submit();
      this.page.waitForUrl('https://e.mail.ru/settings?result=ok&afterReload=1');
    }

}

export default new UserinfoSteps();