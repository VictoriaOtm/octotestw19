import DefaultSteps from './default';
import page from '../pages/phone';

class PhoneSteps extends DefaultSteps {
	constructor() {
		super(page);
    }
    
    checkOpenPhoneUrl() {
        this.page.findPhonePageSelector();
    }
 
    waitForPhone() {
        this.page.waitForContainer();
  }
}

export default new PhoneSteps();




    
