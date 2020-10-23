import account from '../../steps/account';
import directory from '../../steps/directory';
import letters from '../../steps/letters/index';

describe('test id 3', () => {
    beforeEach(() => {
        account.auth();
    });
    it('Создать папку и подпапку и перейти в подпапку', () => {
        directory.createSubDirectoryAndGoTo("someDirectory", "subSomeDirectory");
    });
});
