import account from '../../steps/account';
import calendar from '../../steps/calendar';
import assert from "assert";

describe('Тестирование выбора основного календаря.', () => {
    beforeEach(() => {
        account.auth();
    });

    it('При выборе основного календаря настройки успешно сохраняются.', () => {
        const isSettingsSaved = true;
        calendar.open('https://calendar.mail.ru');
        calendar.openSettings();
        const result = calendar.setCalendar();
        assert.equal(result, isSettingsSaved);
    });
});