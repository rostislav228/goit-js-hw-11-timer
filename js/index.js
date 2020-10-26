class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.refs = {}
        this.refs.timerBlock = document.querySelector(`${selector}`)
        this.refs.days = this.refs.timerBlock.querySelector('[data-value="days"]')
        this.refs.hours = this.refs.timerBlock.querySelector('[data-value="hours"]')
        this.refs.mins = this.refs.timerBlock.querySelector('[data-value="mins"]')
        this.refs.secs = this.refs.timerBlock.querySelector('[data-value="secs"]')
        
        this.intervalId = null;
        this.targetDate = targetDate;
        this.start()
    }
    start() {
        this.intervalId = setInterval(() => {const startTime = Date.now();
            const time = this.targetDate - startTime
            if (time >= 0) {
                const TimeComponents = this.getTimeComponents(time)
                this.timerUpdate(TimeComponents)
                return
            }
            const defolt = {days: 0, hours: 0, mins: 0, secs: 0}
            this.timerUpdate(defolt)
            clearInterval(this.intervalId)
        }
        )
    }
    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        return { days, hours, mins, secs }
    }
    timerUpdate({ days, hours, mins, secs }) {
        this.refs.days.textContent = days
        this.refs.hours.textContent = hours
        this.refs.mins.textContent = mins
        this.refs.secs.textContent = secs
    }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
