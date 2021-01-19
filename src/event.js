import { getCurrentInstance } from 'vue';
class Event {
    constructor() {
        this.events = getCurrentInstance().appContext;
    }

    on(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    off(eventName, fn) {
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    trigger(eventName, data) {
        console.log("eventName: ", eventName, data);
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (fn) {
                console.log("eventName: ", eventName, fn);
                fn(data);
            });
        }
    }
}

//export default new Event();