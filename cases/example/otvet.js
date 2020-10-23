import OtvetSteps from '../../steps/otvet';


describe('test Otvet', () => {
    it('Открыть ответы,перейти в список категорий', () => {
        OtvetSteps.OpenOtvet();
        OtvetSteps.GoToCategoryList();
    });

    it('Открыть ответы,перейти в поиск и сравнить текста в разных инпутах поиска', () => {
        OtvetSteps.OpenOtvet();
        OtvetSteps.FillSearch();
    });
});