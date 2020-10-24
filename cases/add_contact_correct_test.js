import account from '../steps/account';
import contact from '../steps/contact';
import {testData} from "./testData";

describe('add contact', () => {

  before(() => {
    account.open('https://account.mail.ru');
    account.login();
  })

  it('add correct contact', () => {
    contact.open('https://contacts.mail.ru');
    console.log('!!!' + testData.firstName);
    contact.addCorrect(testData.firstName, testData.lastName, testData.nickname, testData.company, testData.email);
  });
});
