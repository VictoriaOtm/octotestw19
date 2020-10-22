import OtvetSteps from '../../steps/otvet';


describe('test Otvet', () => {

    it('Открыть ответы,перейти в список категорий', () => {
        OtvetSteps.open_otvet();
        OtvetSteps.go_to_category_list();
    });

    it('Открыть ответы,перейти в поиск и сравнить текста поисков', () => {
        OtvetSteps.open_otvet();
        OtvetSteps.fill_search();
    });


});