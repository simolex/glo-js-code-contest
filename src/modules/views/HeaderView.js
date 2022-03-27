import { EventEmitter } from "../EventEmitter";

export class HeaderView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    model.subscribe("titleSettted", () => this.rebuildList());
  }
  //Заголовок должен жить в другой структуре, но пока здесь.
  rebuildList() {
    this._elements.moviesTitle.textContent = this._model.title;
  }
  setTitle(nameMovie) {}
}
