import profile_settings from '../../steps/profile_settings';
import authorization from '../../steps/authorization';
import letters from '../../steps/letters/index';


describe('test id', () => {

	beforeEach(() => {
        authorization.auth();
    });
	
	it('Настройки профиля', () => {
	    profile_settings.change();
	});
	
});

