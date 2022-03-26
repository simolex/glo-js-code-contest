import { EventEmitter } from "../EventEmitter";

export class MoviesListView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
  }
}
