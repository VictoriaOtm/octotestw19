import mainPageSteps from "../steps/main_page";
import {foldersHref} from "../store";

describe('test wrap player', () => {
    it('Воспроизвести трек и свернуть плеер', () => {
        mainPageSteps.open(foldersHref.virusmusic);
        mainPageSteps.playTrack();
        mainPageSteps.unwrapPlayer();
    });
});
