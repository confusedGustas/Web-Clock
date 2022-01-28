class Clock {
    constructor (element) {
        this.element = element;
    }

    Start() {
        this.Update();
        setInterval(() => {
            this.Update();
        }, 500);
    }

    Update() {
        const parts = this.getTime()
        const secondsFormat = parts.seconds.toString().padStart(2, "0");
        const minuteFormat = parts.minutes.toString().padStart(2, "0");
        const timeFormat = `${parts.hours}:${minuteFormat}:${secondsFormat}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormat;
        this.element.querySelector(".clock-am-pm").textContent = amPm;
    }

    getTime() {
        const now = new Date();
        
        return {
            hours: now.getHours() % 12 || 12,
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            isAm: now.getHours() < 12
        }
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new Clock(clockElement)

clockObject.Start();