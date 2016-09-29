class Timer {
    constructor(tickCallback, period) {
        this.startTime = null;
        this.endTime = null;
        this.interval = null;
        this.tickCallback = tickCallback;
        this.period = period;
        this._started = false;
    }

    get elapsedTicks() {
        if (!this.startTime) {
            return 0;
        }

        const endTime = this.endTime || new Date().getTime();

        return (endTime - this.startTime);
    }

    get started() {
        return this._started;
    }

    start() {
        this.startTime = new Date().getTime();
        this.endTime = null;
        this._started = true;
        this.interval = setInterval(this.tickCallback, this.period);
    }

    stop() {
        this.endTime = new Date().getTime();
        this._started = false;
        clearInterval(this.interval);
    }
}

export default Timer;
