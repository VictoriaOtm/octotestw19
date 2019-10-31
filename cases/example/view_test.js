import account from '../../steps/account';
import viewer from '../../steps/viewer';
import view from '../../steps/view';


describe('close_view', () => {
    before(() => {
        account.auth();
        viewer.open('https://cloud.mail.ru/');
        viewer.closeBanner();
        viewer.waitForViewer();
    });
    
    it('Открытие нижней панели навигации в окне просмотра файла', () => {
        viewer.openView();
        view.waitForView();
        view.showBottomNavbar();
    })

    it('Закрытие просмотра файла', () => {
        viewer.openView();
        view.waitForView();
        view.closeView();
        viewer.waitForViewer();
    })

    it('Смена вида отображения файлов с плиток на список', () => {
        viewer.changeViewFormat();
    })

    afterEach(() => {
        viewer.open('https://cloud.mail.ru/home/');
    });
})