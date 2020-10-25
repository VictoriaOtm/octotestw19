import auth from "../steps/auth";
import {foldersHref} from "../store";

describe('test id', () => {
    it('Авторизоваться и открыть главную страницу', () => {
        auth.open( foldersHref.login);
        auth.login();
    });
});
