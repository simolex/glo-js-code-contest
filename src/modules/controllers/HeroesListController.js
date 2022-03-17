//HeroesListController

export class HeroesListController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    view.subscribe("addButtonClicked", () => this.addItem());
    view.subscribe("delButtonClicked", (idx) => this.delItem(idx));
  }
}
