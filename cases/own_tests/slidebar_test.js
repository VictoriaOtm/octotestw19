import tabServices from '../../steps/tab/tab';

// пример теста
describe('test tabs', () => {
	it('Open page!', () => {
        browser.windowHandleSize({width:1280,height:800});
        tabServices.open('https://id.mail.ru');
        tabServices.clickTabByName('#services');
        tabServices.clickTabByName('#about');
	});
});
