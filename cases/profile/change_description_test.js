import profile from '../../steps/profile';
import auth from "../../steps/auth";

describe('Профиль', () => {
    beforeEach(() => {
        auth.auth();
    });

    afterEach(()=>{
        auth.logout();
    });

    it('Изменить поле "имя"', () => {
        profile.open('https://cinsear.ru/profile');
        profile.editName();
    });

    it('Изменять поле "о себе"', () => {
        profile.open('https://cinsear.ru/profile');
        profile.editDescription();
    });


});