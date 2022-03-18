import { EventEmitter } from "../EventEmitter";

export class ListMoviesModel extends EventEmitter {
  constructor(moviesList) {
    super();
    this._moviesList = moviesList || [];
  }

  getMovies() {
    return this._moviesList.slice();
  }

  getMovieName(index) {
    return this._moviesList.slice(+index, +index + 1)[0];
  }
}
