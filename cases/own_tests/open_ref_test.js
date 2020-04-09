import sliderbar from '../../steps/ref/ref';

// пример теста
describe('test open reference', () => {
    it('Open page!', () => {
        browser.windowHandleSize({width:1280,height:800});
        sliderbar.open('https://id.mail.ru');
        sliderbar.clickRefByName('https://mail.ru/');
    });
});