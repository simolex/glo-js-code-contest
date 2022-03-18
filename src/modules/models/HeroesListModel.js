import { EventEmitter } from "../EventEmitter";

export class HeroesListModel extends EventEmitter {
  constructor(heroesList) {
    super();
    this._heroesList = heroesList || [];
  }

  getHeroes() {
    return this._heroesList.slice();
  }

  setHeroesList(heroesList) {
    this._heroesList = heroesList;
    this.emit("listSetted", heroesList);
  }
}
