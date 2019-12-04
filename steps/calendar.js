import DefaultSteps from './default';
import page from '../pages/calendar';

class CalendarSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openSettings() {
        this.page.open();
    }

    changeWorkDayTime() {
        this.page.changeBegin();
        this.page.changeEnd();
        return this.page.save();
    }

    setWorkDays() {
        this.page.unClickItems();
        return this.page.save();
    }

    setCalendar() {
        this.page.selectCalendar();
        return this.page.save();
    }

}

export default new CalendarSteps();
