import account from "../../steps/account";
import albums from "../../steps/albums";
import {endHref, foldersHref, mainURL} from "../../store";

const testAlbumPath = `${mainURL}${foldersHref.artist}2${endHref.albums}`;

describe('Исполнители', () => {
    beforeEach(() => account.auth());

    it('Лайк альбома', () => {
        albums.open(testAlbumPath);
        albums.clickFirstAlbum();

        albums.waitForAlbumPage();
        albums.clickLike();
    });
});
