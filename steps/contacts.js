import DefaultSteps from './default';
import page from '../pages/contacts';

class ContactSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    render() {
        this.open('https://id.mail.ru/contacts');
        this.waitForContacts();
    }

    addInvalidNumber() {
        this.page.openPhonePopUp();
        this.page.insertPhone('123');
        this.page.checkInvalidNumber();
    }

    addValidNumber() {
        this.page.openPhonePopUp();
        this.page.insertPhone(process.env.PHONE);
        this.page.checkValidNumber();
    }

    waitForContacts() {
        this.page.waitForContainer();
    }

}

export default new ContactSteps();
