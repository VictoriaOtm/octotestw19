import mainPageSteps from "../steps/main_page";

describe('test wrap player', () => {
    it('Воспроизвести трек и свернуть плеер', () => {
        mainPageSteps.open('https://virusmusic.fun/');
        mainPageSteps.playTrack();
        mainPageSteps.unwrapPlayer();
    });
});
