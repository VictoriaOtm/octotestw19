import DefaultSteps from './default';
import page from '../pages/directory';

class DirectorySteps extends DefaultSteps {
    constructor() {
        super(page);
        this.baseUrl = "https://cloud.mail.ru/home/"
    }

    openAndWaitForUrl(url) {
        this.open(url)
        this.page.waitForUrl(url)
    }

    goToDirectory(dirName) {
        const url = this.baseUrl + dirName + "/"
        this.openAndWaitForUrl(url)
    }
    goToSubDirectory(previosDirName, dirName) {
        const url = this.baseUrl + previosDirName + "/" + dirName + "/"
        this.openAndWaitForUrl(url)
    }

    deleteCurrentSubDirectoryAndDirectory () {
        this.page.deleteCurrentDirectory()
        this.page.deleteCurrentDirectory()
    }

    createDirectoryAndGoTo(dirName) {
        this.page.createDirectory(dirName)
        this.openAndWaitForUrl(this.baseUrl)
        this.goToDirectory(dirName)
        this.page.deleteCurrentDirectory()
    }

    createSubDirectoryAndGoTo(firstDirName, secondDirName) {
        this.openAndWaitForUrl(this.baseUrl)
        this.page.createDirectory(firstDirName)
        this.page.createDirectory(secondDirName)
        this.openAndWaitForUrl(this.baseUrl)
        this.goToDirectory(firstDirName)
        this.goToSubDirectory(firstDirName, secondDirName)
        this.deleteCurrentSubDirectoryAndDirectory()
    }

}

export default new DirectorySteps();
