import { EventEmitter } from "../EventEmitter";

export class HeaderModel extends EventEmitter {
  constructor() {
    super();
    this._title = "";
    this._modeWrittable = false; //"readonly" "readwrite"
    document.getElementById("mode").addEventListener("change", (e) => {
      this._modeWrittable = e.target.checked;
    });
  }

  set title(title) {
    this._title = title;
    this.emit("titleSettted", this._title);
  }
  get title() {
    return this._title;
  }
}
