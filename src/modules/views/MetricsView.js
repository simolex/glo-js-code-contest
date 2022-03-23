import { EventEmitter } from "../EventEmitter";

export class MetricsView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;

    model.subscribe("metricsSetted", () => this.rebuildList());
  }

  rebuildList() {
    this._elements.infoWrapper.innerHTML = "";
    const heroMetrics = this._model.getMetrics();
    for (let metric in heroMetrics) {
      if ("photo" !== metric && "movies" !== metric && "id" !== metric) {
        const itemInfo = document.createElement("div");
        itemInfo.classList.add("info__item");
        itemInfo.innerHTML = `
          <div class="info__label">${metric}</div>
          <div class="info__content">${heroMetrics[metric]}</div>
        `;
        this._elements.infoWrapper.append(itemInfo);
      }
    }
  }
}
