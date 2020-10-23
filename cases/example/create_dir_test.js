import account from '../../steps/account';
import directory from '../../steps/directory';
import letters from '../../steps/letters/index';

describe('test id 2', () => {
    beforeEach(() => {
        account.auth();
    });

    it('Создать папку и перейти в нее', () => {
        directory.createDirectoryAndGoTo("FirstDirectory");
    });
});
