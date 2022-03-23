export class ListMoviesController {
  constructor(model, view) {
    this._model = model;
    this._view = view;
    view.subscribe("checkShareClicked", (e) => this.changeShare(e));
    view.subscribe("selectMovie", (id) => this.selectMovie(id));
    view.subscribe("mouseEnterMovie", (id) => this.changeEnteredMovie(id));
    view.subscribe("mouseLeaveMovie", () => this.changeEnteredMovie(-1));
  }

  changeShare({ id, checked }) {
    this._model.editShareList(id, checked);
  }
  selectMovie(id) {
    this._model.setActiveMovie(id);
    this._view.setTitle(this._model.getMovieName(id));
  }

  changeEnteredMovie(id) {
    const oldId = this._model.enteredMovie;
    if (oldId >= 0) {
      this._model.emit("aliveMovieLine", oldId);
    }
    this._model.enteredMovie = id;
    if (id >= 0) {
      this._model.emit("enterMovieLine", id);
    }
  }
}
