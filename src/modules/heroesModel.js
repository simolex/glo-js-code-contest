//import { moviesSelector } from "./moviesSelector";

export class heroesModel {
  constructor(dbPath) {
    this._dbPath = dbPath;
    this._moviesTitle = document.querySelector(".heroes__title");
  }
  getData() {
    return fetch(this._dbPath)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log(`${urlHref} - ${err.message}`);
      });
  }

  selectHeroes(movieName) {
    //this.setTitle(movieName);
    return this.getData().then((heroes) => {
      return heroes.filter((theHero) => theHero.movies && theHero.movies.includes(movieName));
    });
  }
  getHeroes(heroesName) {
    return this.getData().then((heroes) => {
      return heroes.find((theHero) => theHero.name == heroesName);
    });
  }
}
