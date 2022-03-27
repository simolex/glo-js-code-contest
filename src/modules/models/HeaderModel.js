import { EventEmitter } from "../EventEmitter";

export class HeaderModel extends EventEmitter {
  constructor() {
    super();
    this._title = "";
    this._modeWrittable = false; //"readonly" "readwrite"
    //document.getElementById("mode")
  }

  set title(title) {
    this._title = title;
    this.emit("titleSettted", this._title);
  }
  get title() {
    return this._title;
  }

  get modeWrittable() {
    return this._modeWrittable;
  }

  changeMode(mode) {
    this._modeWrittable = mode;
    this.emit("modeChanged", mode);
  }
}
