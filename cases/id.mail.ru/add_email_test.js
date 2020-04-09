import account from '../../steps/account';
import contacts from '../../steps/contacts';

describe('test email', () => {

    it('log in', () => {
        account.auth();
    });

    it('add Invalid Email', () => {
        contacts.render();
        contacts.addInvalidEmail();
    });

});
