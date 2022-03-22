import { EventEmitter } from "../EventEmitter";

export class MetricsModel extends EventEmitter {
  constructor(metricsList) {
    super();
    this._metricsList = metricsList || [];
  }
  getMetrics() {
    return { ...this._metricsList };
  }
  setMetrics(metricsList) {
    this._metricsList = metricsList || [];
    this.emit("metricsSetted", metricsList);
  }
}