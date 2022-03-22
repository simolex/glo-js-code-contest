export class heroesDB {
  constructor(dbPath) {
    this._dbPath = dbPath;
    this._moviesTitle = document.querySelector(".heroes__title");
    this._mode = false; //"readonly" "readwrite"
    document.getElementById("mode").addEventListener("change", (e) => {
      this._mode = e.target.checked;
    });
  }
  isEditable() {
    return this._mode;
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
    return this.getData().then((heroes) => {
      return heroes.filter((theHero) => theHero.movies && theHero.movies.includes(movieName));
    });
  }

  changeMovies(id, moviesList) {
    console.log({
      action: fetch,
      id,
      patch: moviesList,
    });
  }
}
