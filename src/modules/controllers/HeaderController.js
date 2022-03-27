export class HeaderController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    view.subscribe("checkModeClicked", (mode) => this.changeMode(mode));
  }

  changeMode(mode) {
    this._model.changeMode(mode);
  }
}
