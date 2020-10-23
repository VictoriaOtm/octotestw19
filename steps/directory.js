import DefaultSteps from './default';
import page from '../pages/directory';

class DirectorySteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    goToDirectory(dirName) {
        let url = "https://cloud.mail.ru/home/" + dirName + "/"
        this.open(url)
        this.page.waitForUrl(url)
    }
    goToSubDirectory(previosDirName, dirName) {
        let url = "https://cloud.mail.ru/home/" + previosDirName + "/" + dirName + "/"
        this.open(url)
        this.page.waitForUrl(url)
    }

    createDirectoryAndGoTo(dirName) {
        this.page.createDirectory(dirName)
        this.open("https://cloud.mail.ru/");
        this.page.waitForUrl("https://cloud.mail.ru/home");
        this.goToDirectory(dirName)
        this.page.deleteCurrentDirectory()
    }

    createSubDirectoryAndGoTo(firstDirName, secondDirName) {
        this.page.waitForUrl("https://cloud.mail.ru/home");

        this.page.createDirectory(firstDirName)
        this.page.createDirectory(secondDirName)
        this.open("https://cloud.mail.ru/home");
        // Иногда здесь выскакивает баннер
        this.page.waitForUrl("https://cloud.mail.ru/home");
        this.goToDirectory(firstDirName)
        this.goToSubDirectory(firstDirName, secondDirName)
        this.page.deleteCurrentDirectory()
        this.page.deleteCurrentDirectory()

    }
}

export default new DirectorySteps();