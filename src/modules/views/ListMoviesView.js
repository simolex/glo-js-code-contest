import { EventEmitter } from "../EventEmitter";
//import { heroesView } from "../heroesView";

export class ListMoviesView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    this._moviesElements = [];

    // attach model listeners
    // model
    //   .subscribe("rowAdded", () => this.rebuildList())
    //   .subscribe("rowRemoved", () => this.rebuildList());

    // elements.addButton.addEventListener("click", () => this.emit("addButtonClicked"));
    // attach listeners to HTML controls
    this._elements.heroesMovies.addEventListener("click", (e) => {
      const selectedMovie = e.target.closest(".heroes__movie-item");
      const id = selectedMovie.dataset.movies;
      const nameMovie = this._model.getMovieName(id);
      mainModel.selectHeroes(nameMovie).then((heroes) => {
        this._setActiveMovie(selectedMovie);
        this._setTitle(nameMovie);
        this._model.emit("movieSelected", heroes);
        //modelHeroes.setHeroesList(heroes);
        //heroesView(heroes);
      });
    });

    this._elements.heroesMovies.addEventListener(
      "mouseenter",
      (e) => {
        const currentTarget = e.target.closest(".heroes__movie-item");
        if (currentTarget) {
          this._highlightMovie(currentTarget);
        }
      },
      true
    );

    this._elements.heroesMovies.addEventListener("mouseleave", () => {
      this._highlightMovie();
    });
  }

  _setTitle(nameMovie) {
    this._elements.moviesTitle.textContent = nameMovie;
  }

  _markingMovieOption(markerClass, currentElement = {}) {
    this._moviesElements.forEach((elem) => {
      if (currentElement !== {} && elem === currentElement) {
        elem.classList.add(markerClass);
      } else {
        elem.classList.remove(markerClass);
      }
    });
  }
  _highlightMovie(currentElement) {
    this._markingMovieOption(this._elements.classHighlight, currentElement);
  }
  _setActiveMovie(currentElement) {
    this._markingMovieOption(this._elements.classActive, currentElement);
  }

  show() {
    this.rebuildList();
    this._setActiveMovie(this._moviesElements[0]);
    const nameMovie = this._model.getMovieName(0);
    this._setTitle(nameMovie);
    mainModel.selectHeroes(nameMovie).then((heroes) => {
      //modelHeroes.setHeroesList(heroes);
      this._model.emit("movieSelected", heroes);
      //heroesView(heroes);
    });
  }

  rebuildList() {
    this._elements.heroesMovies.innerHTML = "";

    this._model.getMovies().forEach((movie, index) => {
      const option = document.createElement("li");
      option.classList.add("heroes__movie-item");
      option.dataset.movies = index;
      option.textContent = movie;
      this._moviesElements.push(option);
      this._elements.heroesMovies.append(option);
    });
  }
}
