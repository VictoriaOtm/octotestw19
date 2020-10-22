import mainPageSteps from "../steps/main_page";

describe('test track play', () => {
    it('Воспроизвести трек', () => {
        mainPageSteps.open('https://virusmusic.fun/');
        mainPageSteps.playTrack();
    });
});
