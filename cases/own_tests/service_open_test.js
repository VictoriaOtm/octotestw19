import tabServices from '../../steps/tab/tab';
import services from '../../steps/contentServices/contentServices'

// пример теста
describe('test services opening', () => {
	it('Open page!', () => {
        browser.windowHandleSize({width:1280,height:800});
        services.open('https://id.mail.ru');
        tabServices.clickTabByName('#services');
        services.clickServiceByName('https://city-mobil.ru/');
	});
});
