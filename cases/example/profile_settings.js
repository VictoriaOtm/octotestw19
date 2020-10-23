import profileSettings from '../../steps/profile_settings';
import authorization from '../../steps/authorization';
import letters from '../../steps/letters/index';


describe('test id', () => {

	beforeEach(() => {
            authorization.auth();
       });
	
	it('Изменение имени на невалидное', () => {
	    profileSettings.changeName('1');
	    profileSettings.checkInvalidName();
	});


	it('Изменение фамилии на невалидную', () => {
	    profileSettings.changeSurname('2');
	    profileSettings.checkInvalidSurname();
	});
	
});

