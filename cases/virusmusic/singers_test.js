import vm_account from "../../steps/vm_account";
import artists from "../../steps/artists/index";
import albums from "../../steps/albums/index";

// beforeEach(function() {
//     return vm_account.auth();
// });

describe('Исполнители', () => {
    vm_account.auth();
    it('Нажатие на имя исполнителя под песней', () => {
        artists.open('https://virusmusic.fun/artist/2/tracks');
        artists.waitForSelf();

        artists.clickArtistName();
        artists.waitForSelf();
    });

    it('Лайк альбома', () => {
        albums.open('https://virusmusic.fun/artist/2/albums');
        vm_account.auth();
        albums.open('https://virusmusic.fun/artist/2/albums');
        albums.clickFirstAlbum();

        albums.waitForSelf();
        albums.clickLike();
    });
});
