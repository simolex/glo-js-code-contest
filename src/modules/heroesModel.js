import { moviesSelector } from "./moviesSelector";
export class heroesModel {
  constructor(dbPath) {
    this.filterGroups = {};
    this._dbPath = dbPath;
    this._getData().then((data) => {
      data.forEach((heroes) => {
        for (let metric in heroes) {
          if (!this.filterGroups[metric] && metric === "movies") {
            this.filterGroups[metric] = [];
          }

          if (metric === "movies") {
            heroes[metric] &&
              heroes[metric].forEach((filmName) => {
                if (!this.filterGroups[metric].includes(filmName)) {
                  this.filterGroups[metric].push(filmName);
                }
              });
          } //else {
          //   if (!this.filterGroups[metric].includes(heroes[metric])) {
          //     this.filterGroups[metric].push(heroes[metric]);
          //   }
          // }
        }
      });
      moviesSelector(this.filterGroups.movies);
    });
    console.log(this.filterGroups);
  }
  _getData() {
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
  selectHeroes(movieId) {
    const movieName = this.filterGroups.movies[movieId];
    return this._getData().then((heroes) => {
      return heroes.filter((theHero) => theHero.movies && theHero.movies.includes(movieName));
    });
  }
}
