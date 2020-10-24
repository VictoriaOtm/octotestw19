import OtvetSteps from '../../steps/otvet';

const SEARCH_TEXT = "TEXT";

describe('test Otvet search', () => {
    it('Открыть ответы,перейти в поиск и сравнить текста в разных инпутах поиска', () => {
        OtvetSteps.OpenOtvet();
        OtvetSteps.FillSearch(SEARCH_TEXT);
    });
});