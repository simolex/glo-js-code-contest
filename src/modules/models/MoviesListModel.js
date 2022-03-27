import { EventEmitter } from "../EventEmitter";

export class MoviesListModel extends EventEmitter {
  constructor(moviesList) {
    super();
    this._moviesList = moviesList || [];
    this._shareList = [];
    this._activeMovieId = 0;
    this._enteredMovie = -1;
    this._isEditable = false;
  }

  set isEditable(isEditable) {
    this._isEditable = isEditable;
  }

  get isEditable() {
    return this._isEditable;
  }

  set enteredMovie(idMovie) {
    this._enteredMovie = idMovie;
  }
  get enteredMovie() {
    return this._enteredMovie;
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
  editShareList(id, checked) {
    if (checked) {
      this._shareList.push(this._moviesList[id]);
    } else {
      this._shareList = this._shareList.filter((movie) => movie !== this._moviesList[id]);
    }
    this.emit("shareListChanged", this._shareList.slice());
  }
  hasShare(movie) {
    return this._shareList.includes(movie);
  }
}
