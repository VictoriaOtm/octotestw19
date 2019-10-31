import DefaultPage from './default';

class Calendar extends DefaultPage {
    constructor() {
        super('calendar', '[id=app]')
    }

    get locators() {
        return {
            settings: '[href="?action=settings"]',
            beginWorkDay: 'input[name="start"]',
            endWorkDay: 'input[name="end"]',
            saveButton: '[class="button button_size_default button_color_primary button_submit popup-pane__button"]',
            calendarList: '[class="settings-calendar-select"]',
            selectOption: 'option[value="C46AB215-42FA-4B55-AA85-821A8C956380"]',
        }
    }

    open() {
        this.page.waitForVisible(this.locators.settings);
        this.page.click(this.locators.settings);
    }

    changeBegin() {
        this.page.waitForVisible(this.locators.beginWorkDay);
        this.page.click(this.locators.beginWorkDay);
        this.page.setValue(this.locators.beginWorkDay, "10:00");
    }

    changeEnd() {
        this.page.waitForVisible(this.locators.endWorkDay);
        this.page.click(this.locators.endWorkDay);
        this.page.setValue(this.locators.endWorkDay, "18:00");
    }

    unClickItems() {
        const firstDay = 1;
        const lastDay = 7;

        for (let i = firstDay; i < lastDay + 1; i++) {
            this.page.waitForVisible('[data-id="' + i + '"');
        }

        const thirdDay = 3;
        const sixthDay = 6;

        for (let i = thirdDay; i < sixthDay; i++) {
            this.page.click('[data-id="' + i + '"');
        }
    }

    selectCalendar() {
        this.page.waitForVisible(this.locators.calendarList);
        this.page.click(this.locators.calendarList);
        this.page.waitForVisible(this.locators.selectOption);
        this.page.click(this.locators.selectOption);
    }

    save() {
        this.page.waitForVisible(this.locators.saveButton);
        this.page.click(this.locators.saveButton);
        this.page.waitForVisible(this.container);
    }

}

export default new Calendar();
