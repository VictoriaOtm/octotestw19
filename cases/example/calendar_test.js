import account from '../../steps/account';
import calendar from '../../steps/calendar';

describe('Тестирование времени рабочего дня', () => {
    it('При выборе начала и конца рабочего дня настройки успешно сохраняются.', () => {
        account.auth();
        calendar.open('https://calendar.mail.ru');
        calendar.openSettings();
        calendar.changeWorkDayTime();
    });

    it('При выборе хотя бы двух рабочих дней настройки успешно сохраняются.', () => {
        calendar.open('https://calendar.mail.ru');
        calendar.openSettings();
        calendar.setWorkDays();
    });

    it('При выборе основного календаря настройки успешно сохраняются.', () => {
        calendar.open('https://calendar.mail.ru');
        calendar.openSettings();
        calendar.setCalendar();
    });
});


