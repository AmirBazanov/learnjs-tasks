class Clock {
    constructor(timeTemp ) {
        this.timeTemp = timeTemp;
    }

    printTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let secs = now.getSeconds();

        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (secs < 10) secs = '0' + secs;

        let output = this.timeTemp
            .replace('h', hours)
            .replace('m', minutes)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.printTime();
        this.timer = setInterval(() => this.printTime(), 1000);
    }
}
