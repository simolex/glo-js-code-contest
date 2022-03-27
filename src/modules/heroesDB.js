export class heroesDB {
  constructor(baseUrl) {
    this._baseUrl = new URL("./", baseUrl).href;
    //this._dbPath = dbPath;
    this._moviesTitle = document.querySelector(".heroes__title");
  }
  _getURL(id = "", options = {}) {
    const url = new URL(`./${id}`, this._baseUrl);
    for (let nameOption in options) {
      url.searchParams.append(nameOption, options[nameOption]);
    }
    return url.href;
  }

  _getData(id, options) {
    const urlHref = this._getURL(id, options);
    return fetch(urlHref)
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

  _setData({ method, id, data, options }) {
    const urlHref = this._getURL(id, options);
    const fetchOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    if (data) {
      fetchOptions["body"] = JSON.stringify(data);
    }
    return fetch(urlHref, fetchOptions)
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

  isEditable() {
    return this._mode;
  }

  getData() {
    return this._getData();
  }

  selectHeroes(movieName) {
    return this.getData().then((heroes) => {
      return heroes.filter((theHero) => theHero.movies && theHero.movies.includes(movieName));
    });
  }

  addHero(user) {
    return this._setData({ method: "POST", data: user });
  }

  changeMovies(id, moviesList) {
    console.log({
      action: fetch,
      id,
      patch: moviesList,
    });
    return this._setData({ id: id, method: "PATCH", data: moviesList });
  }
}
