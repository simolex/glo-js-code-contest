import { EventEmitter } from "../EventEmitter";
import { createCheckBoxElement } from "../helpers";

export class MoviesListView extends EventEmitter {
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
        this.emit("mouseEnterMovie", this._moviesElements.indexOf(e.target.closest(".heroes__movie-item")));
      },
      true
    );

    this._elements.heroesMovies.addEventListener("mouseleave", () => {
      this.emit("mouseLeaveMovie");
    });
  }

  _unHighlightMovie(id) {
    this._moviesElements[id].classList.remove(this._elements.classHighlight);
  }

  _onHighlightMovie(id, currentElement) {
    this._moviesElements[id].classList.add(this._elements.classHighlight);
  }

  // _setShareState(currentElement, isEditable = false) {
  //   //if()

  //   currentElement.querySelector("input").checked;
  // }

  show() {
    this.emit("selectMovie", 0);
  }

  rebuildList() {
    this._elements.heroesMovies.innerHTML = "";
    this._moviesElements.length = 0;
    this._model.getMovies().forEach((movie, index) => {
      const option = document.createElement("li");
      option.classList.add("heroes__movie-item");
      const { editBlock, viewEditBlock } = createCheckBoxElement();
      if (mainDB.isEditable()) {
        viewEditBlock.classList.add("movie-edit__change");
        editBlock.name = `movie-${index}`;
        editBlock.id = `movie-${index}`;
        if (this._model.hasShare(movie)) {
          editBlock.checked = true;
        } else {
          editBlock.checked = false;
        }
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
      //console.log(this._moviesElements);
    });
  }
}
