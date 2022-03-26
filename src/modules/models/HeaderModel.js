import { EventEmitter } from "../EventEmitter";

export class MoviesListModel extends EventEmitter {
  constructor() {
    super();
    this._title = "";
    this._modeWrittable = false; //"readonly" "readwrite"
    document.getElementById("mode").addEventListener("change", (e) => {
      this._modeWrittable = e.target.checked;
    });
  }
}
