import account from '../steps/account';
import contact from '../steps/contact';

describe('add contact', () => {

  before(() => {
    account.open('https://account.mail.ru');
    account.login();
  })

  it('add correct contact', () => {
    contact.open('https://contacts.mail.ru');
    contact.addCorrect();
  });

  it('add contact with incorrect email', () => {
    contact.open('https://contacts.mail.ru');
    contact.addWithWrongEmail();
  })

  it('add contact with no fields', () => {
    contact.open('https://contacts.mail.ru');
    contact.addEmpty();
  })
});
