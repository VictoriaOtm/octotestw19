import account from '../../steps/account';
import search from '../../steps/search';
import { foldersHref } from "../../store";


describe('test id', () => {
    let work_data = {};

    before(() => {
        account.auth();
        search.open(foldersHref.search_jobs);
        work_data = search.getFirstJob();
    });

    it('Поиск работы по тэгу', () => {
        search.findJobByTag(work_data);
    });

    it('Поиск работы по слову в названии', () => {
        search.findJobByTitle(work_data);
    });

});
