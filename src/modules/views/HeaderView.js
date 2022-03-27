import { EventEmitter } from "../EventEmitter";

export class HeaderView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    model.subscribe("titleSettted", () => this.rebuildList()).subscribe("modeChanged", () => this.rebuildList());

    this._elements.checkModeWrittable.addEventListener("change", (e) => {
      this.emit("checkModeClicked", e.target.checked);
      this._modeWrittable = e.target.checked;
    });
  }
  //Заголовок должен жить в другой структуре, но пока здесь.
  rebuildList() {
    this._elements.moviesTitle.textContent = this._model.title;
    this._elements.checkModeWrittable.checked = this._model.modeWrittable;
  }
}
