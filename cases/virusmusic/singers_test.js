import account from "../../steps/account";
import artists from "../../steps/artists";
import {endHref, foldersHref, mainURL} from "../../store";

describe('Исполнители', () => {
    beforeEach(() => account.auth() );

    it('Нажатие на имя исполнителя под песней', () => {
        artists.open(mainURL+foldersHref.artist+'2'+endHref.tracks);
        artists.waitForSelf();

        artists.clickArtistName();
        artists.waitForSelf();
    });
});
