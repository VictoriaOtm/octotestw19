import account from '../../steps/account';
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters/index';
import signup from '../../steps/signup/index';
import recovery from '../../steps/recovery/index';
import {foldersHref} from '../../store/index';

const FOLDER = foldersHref.sent;

describe('Login', () => {
	it('Click signup and wait for signup form', () => {
		account.open('https://account.mail.ru/');
		account.signup();
		signup.waitForForm();
	});

	it('Click recovery and wait for recovery form', () => {
		account.open('https://account.mail.ru/');
		account.recovery();
		recovery.waitForForm();
	});

	it('Input just name and login and wait for messages list', () => {
		account.open('https://account.mail.ru/');
		account.login();
		letters.waitForList();
	});
});
