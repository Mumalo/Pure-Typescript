export interface Events {
    [key: string]: Callback[]
}

export type Callback = () => void;

export class Eventing {
    private readonly events:  Events;

    constructor() {
        this.events = {};
    }

    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName] || [];

        if (handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        })
    }
}
