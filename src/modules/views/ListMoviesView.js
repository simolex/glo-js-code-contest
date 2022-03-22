import { EventEmitter } from "../EventEmitter";

export class ListMoviesView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    this._moviesElements = [];

    model.subscribe("shareListSetted", () => this.rebuildList());

    this._elements.heroesMovies.addEventListener("click", (e) => {
      const id = e.target.closest(".heroes__movie-item").dataset.movies;
      this._model.setActiveMovie(id);

      const nameMovie = this._model.getMovieName(id);
      this._setTitle(nameMovie);
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
    this._model.setActiveMovie(0);

    const nameMovie = this._model.getMovieName(0);
    this._setTitle(nameMovie);
  }

  rebuildList() {
    this._elements.heroesMovies.innerHTML = "";
    this._model.getMovies().forEach((movie, index) => {
      const option = document.createElement("li");
      option.classList.add("heroes__movie-item");
      if (this._model.hasShare(movie)) {
        option.classList.add(this._elements.classShare);
      }
      if (index == this._model.getActiveMovie()) {
        option.classList.add(this._elements.classActive);
      }
      option.dataset.movies = index;
      option.textContent = movie;
      this._moviesElements.push(option);
      this._elements.heroesMovies.append(option);
    });
  }
}
