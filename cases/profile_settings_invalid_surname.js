import profileSettings from '../steps/profile_settings';
import authorization from '../steps/authorization';
import letters from '../steps/letters/index';


describe('test id', () => {

	beforeEach(() => {
		authorization.auth();
	});

	it('Изменение фамилии на невалидную', () => {
	    profileSettings.changeSurname('2');
	    profileSettings.checkInvalidSurname();
	});
	
});

