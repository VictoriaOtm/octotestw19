import account from '../steps/account';
import contact from '../steps/contact';
import {testData} from './testData';

describe('add contact', () => {

  before(() => {
    account.open('https://account.mail.ru');
    account.login();
  })

  it('add contact with incorrect email', () => {
    contact.open('https://contacts.mail.ru');
    contact.addWithWrongEmail(testData.firstName, testData.lastName, testData.nickname, testData.company, testData.wrongEmail);
  })
});