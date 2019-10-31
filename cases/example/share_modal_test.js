import account from '../../steps/account';
import viewer from '../../steps/viewer';


// пример теста
describe('test id', () => {
	before(() => {
		account.auth();
		viewer.openCloud();
	});

	it('Проверка открытия модального окна предоставления доступа', () => {
		viewer.checkShare();
	});
});
