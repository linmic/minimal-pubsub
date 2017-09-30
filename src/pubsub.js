// @flow
class PubSub {
  events = {};

  subscribe(eventName: string, fn: Function) {
    this.events[eventName] = this.events[eventName] || [];

    const idx = this.events[eventName].push(fn) - 1;

    return {
      unsubscribe: void function() {
        delete this.events[eventName][idx];
      },
    };
  }

  publish(eventName: string, data: any) {
    if (this.events.hasOwnProperty(eventName)) {
      this.events[eventName].forEach(fn => fn(data));
    }
  }
}

export default PubSub;
