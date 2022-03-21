import { EventEmitter } from "../EventEmitter";

export class ListMoviesModel extends EventEmitter {
  constructor(moviesList) {
    super();
    this._moviesList = moviesList || [];
    this._shareList = ["Black Panther", "Captain America: Civil War"];
  }

  getMovies() {
    return this._moviesList.slice();
  }

  getMovieName(index) {
    return this._moviesList.slice(+index, +index + 1)[0];
  }
  setShareList(shareList) {
    this._shareList = shareList;
    this.emit("shareListSetted", shareList);
  }
  hasShare(movie) {
    return this._shareList.includes(movie);
  }
}
