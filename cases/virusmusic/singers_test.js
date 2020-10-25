import account from "../../steps/account";
import artists from "../../steps/artists";
import {endHref, foldersHref, mainURL} from "../../store";

const testTracksPath = `${mainURL}${foldersHref.artist}2${endHref.tracks}`;

describe('Исполнители', () => {
    beforeEach(() => account.auth() );

    it('Нажатие на имя исполнителя под песней', () => {
        artists.open(testTracksPath);
        artists.waitForSelf();

        artists.clickArtistName();
        artists.waitForSelf();
    });
});
