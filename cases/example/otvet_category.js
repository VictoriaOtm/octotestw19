import OtvetSteps from '../../steps/otvet';

describe('test Otvet category', () => {
    it('Открыть ответы,перейти в список категорий', () => {
        OtvetSteps.OpenOtvet();
        OtvetSteps.GoToCategoryList();
    });
});