import DefaultSteps from "./default";
import page from "../pages/profile";

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    changeName() {
        this.page.fillNameForm("TestName");
    }

    changeLastName() {
        this.page.fillLastNameForm("TestLastName");
    }

    changeGender(){
        this.page.changeGender();
    }

    // changePhoto(){
    //     this.page.changePhoto();
    // }

    sumbit(){
        this.page.submit();
    }

    waitForAccount() {
        this.page.waitForContainer();
    }
}

export default new ProfileSteps();