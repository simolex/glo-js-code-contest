export class EventEmitter {
  constructor() {
    this._events = {};
  }
  subscribe(e, listener) {
    (this._events[e] || (this._events[e] = [])).push(listener);
    return this;
  }
  emit(e, prop) {
    (this._events[e] || []).slice().forEach((lsn) => lsn(prop));
  }
}
