import DefaultSteps from './default';
import page from '../pages/directory';

class DirectorySteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openAndWaitForUrl(url) {
        this.open(url)
        this.page.waitForUrl(url)
    }

    goToDirectory(dirName) {
        const url = "https://cloud.mail.ru/home/" + dirName + "/"
        this.openAndWaitForUrl(url)
    }
    goToSubDirectory(previosDirName, dirName) {
        const url = "https://cloud.mail.ru/home/" + previosDirName + "/" + dirName + "/"
        this.openAndWaitForUrl(url)
    }

    createDirectoryAndGoTo(dirName) {
        this.page.createDirectory(dirName)
        this.openAndWaitForUrl("https://cloud.mail.ru/home")
        this.goToDirectory(dirName)
        this.page.deleteCurrentDirectory()
    }

    deleteCurrentSubDirectoryAndDirectory () {
        this.page.deleteCurrentDirectory()
        this.page.deleteCurrentDirectory()
    }

    createSubDirectoryAndGoTo(firstDirName, secondDirName) {
        const url = "https://cloud.mail.ru/home"
        this.openAndWaitForUrl(url)
        this.page.createDirectory(firstDirName)
        this.page.createDirectory(secondDirName)
        this.openAndWaitForUrl(url)
        this.goToDirectory(firstDirName)
        this.goToSubDirectory(firstDirName, secondDirName)
        this.deleteCurrentSubDirectoryAndDirectory()

    }
}

export default new DirectorySteps();
