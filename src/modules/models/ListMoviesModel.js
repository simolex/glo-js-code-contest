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

  // addRow(rowObj) {
  //   let row;
  //   this._rowList.push(row);
  //   localStorage.setItem("equipments", JSON.stringify(this._rowList));
  //   this.emit("rowAdded", row);
  // }

  // removeRow(id) {
  //   const row = this._rowList.splice(id, 1)[0];
  //   localStorage.setItem("equipments", JSON.stringify(this._rowList));
  //   this.emit("rowRemoved", row);
  // }
}
