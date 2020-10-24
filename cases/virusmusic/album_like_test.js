import account from "../../steps/account";
import albums from "../../steps/albums";
import {endHref, foldersHref, mainURL} from "../../store";

describe('Исполнители', () => {
    beforeEach(() => account.auth());

    it('Лайк альбома', () => {
        albums.open(mainURL+foldersHref.artist+'2'+endHref.albums);
        albums.clickFirstAlbum();

        albums.waitForAlbumPage();
        albums.clickLike();
    });
});
