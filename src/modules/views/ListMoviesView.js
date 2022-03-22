import { EventEmitter } from "../EventEmitter";

export class ListMoviesView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    this._moviesElements = [];

    model
      .subscribe("shareListSetted", () => this.rebuildList())
      .subscribe("aliveMovieLine", (id) => this._unHighlightMovie(id))
      .subscribe("enterMovieLine", (id) => this._onHighlightMovie(id));

    this._elements.heroesMovies.addEventListener("click", (e) => {
      const id = e.target.closest(".heroes__movie-item").dataset.movies;
      if (e.target.closest(".movie-edit")) {
        this.emit("checkShareClicked", {
          id,
          checked: e.target.closest(".movie-edit").querySelector("input").checked,
        });
      } else {
        this.emit("selectMovie", id);
      }
    });

    this._elements.heroesMovies.addEventListener(
      "mouseenter",
      (e) => {
        this.emit(
          "mouseEnterMovie",
          this._moviesElements.indexOf(e.target.closest(".heroes__movie-item"))
        );
      },
      true
    );

    this._elements.heroesMovies.addEventListener("mouseleave", () => {
      this.emit("mouseLeaveMovie");
      //this._highlightMovie();
    });
  }

  setTitle(nameMovie) {
    this._elements.moviesTitle.textContent = nameMovie;
  }

  // _markingMovieOption(markerClass, currentElement = {}) {
  //   this._moviesElements.forEach((elem) => {
  //     if (currentElement !== {} && elem === currentElement) {
  //       elem.classList.add(markerClass);
  //     } else {
  //       elem.classList.remove(markerClass);
  //     }
  //   });
  // }
  _unHighlightMovie(id) {
    this._moviesElements[id].classList.remove(this._elements.classHighlight);
  }

  _onHighlightMovie(id, currentElement) {
    this._moviesElements[id].classList.add(this._elements.classHighlight);
  }

  // _setActiveMovie(currentElement, id) {
  //   this._markingMovieOption(this._elements.classActive, currentElement);
  // }

  // _setShareState(currentElement, isEditable = false) {
  //   //if()

  //   currentElement.querySelector("input").checked;
  // }

  show() {
    this.emit("selectMovie", 0);
    // this._model.setActiveMovie(0);

    // const nameMovie = this._model.getMovieName(0);
    // this.setTitle(nameMovie);
  }

  rebuildList() {
    this._elements.heroesMovies.innerHTML = "";
    this._moviesElements.length = 0;
    this._model.getMovies().forEach((movie, index) => {
      const option = document.createElement("li");
      option.classList.add("heroes__movie-item");
      const viewEditBlock = document.createElement("span");
      viewEditBlock.classList.add("movie-edit");
      if (mainDB.isEditable()) {
        const editBlock = document.createElement("input");
        editBlock.type = "checkbox";
        editBlock.classList.add("movie-edit__change");
        editBlock.name = `movie-${index}`;
        editBlock.id = `movie-${index}`;
        if (this._model.hasShare(movie)) {
          editBlock.checked = true;
        } else {
          editBlock.checked = false;
        }
        viewEditBlock.append(editBlock);
      } else {
        if (this._model.hasShare(movie)) {
          option.classList.add(this._elements.classShare);
        }
      }

      if (index == this._model.getActiveMovie()) {
        option.classList.add(this._elements.classActive);
      }
      option.dataset.movies = index;
      const text = document.createElement("span");
      text.textContent = movie;
      option.append(text);
      option.append(viewEditBlock);
      this._moviesElements.push(option);
      this._elements.heroesMovies.append(option);
      console.log(this._moviesElements);
    });
  }
}
