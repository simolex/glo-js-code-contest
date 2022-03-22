import { EventEmitter } from "../EventEmitter";

export class ListMoviesModel extends EventEmitter {
  constructor(moviesList) {
    super();
    this._moviesList = moviesList || [];
    this._shareList = [];
    this._activeMovieId = 0;
  }

  getMovies() {
    return this._moviesList.slice();
  }

  getMovieName(index) {
    return this._moviesList.slice(+index, +index + 1)[0];
  }
  setActiveMovie(id) {
    this._activeMovieId = id;
    this.emit("movieSelected", this._moviesList[id]);
  }
  getActiveMovie() {
    return this._activeMovieId - 0;
  }

  setShareList(shareList) {
    this._shareList = shareList;
    this.emit("shareListSetted", shareList);
  }
  hasShare(movie) {
    return this._shareList.includes(movie);
  }
}
