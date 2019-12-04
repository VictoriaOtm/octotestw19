import account from '../../steps/account';
import calendar from '../../steps/calendar';
import assert from 'assert';

describe('Тестирование времени рабочего дня.', () => {
    beforeEach(() => {
        account.auth();
    });

    it('При выборе начала и конца рабочего дня настройки успешно сохраняются.', () => {
        const isSettingsSaved = true;
        calendar.open('https://calendar.mail.ru');
        calendar.openSettings();
        const result = calendar.changeWorkDayTime();
        assert.equal(result, isSettingsSaved);
    });
});


