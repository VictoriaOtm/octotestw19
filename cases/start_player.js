import mainPageSteps from "../steps/main_page";
import {foldersHref} from "../store";
describe('test track play', () => {
    it('Воспроизвести трек', () => {
        mainPageSteps.open(foldersHref.virusmusic);
        mainPageSteps.playTrack();
    });
});
