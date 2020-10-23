import OtvetSteps from '../../steps/otvet';


describe('test Otvet', () => {
    it('Открыть ответы,перейти в список категорий', () => {
        OtvetSteps.OpenOtvet();
        OtvetSteps.GoToCategoryList();
    });

    it('Открыть ответы,перейти в поиск и сравнить текста поисков', () => {
        OtvetSteps.OpenOtvet();
        OtvetSteps.FillSearch();
    });
});