import { EventEmitter } from "../EventEmitter";
import { infoRender } from "../infoRender";

export class HeroesListView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    //this._moviesElements = [];

    // attach model listeners
    model.subscribe("listSetted", () => this.rebuildList());
    //   .subscribe("rowRemoved", () => this.rebuildTable());

    this._elements.swiper.on("slideChangeTransitionEnd", () => {
      mainModel.getHeroes(document.querySelector(".swiper-slide-active").dataset.heroesName).then((heroes) => {
        infoRender(heroes);
      });
    });

    // elements.addButton.addEventListener("click", () => this.emit("addButtonClicked"));
    // attach listeners to HTML controls
    //  this._elements.heroesMovies.addEventListener("click", (e) => {
    //    const selectedMovie = e.target.closest(".heroes__movie-item");
    //    const id = selectedMovie.dataset.movies;
    //    const nameMovie = this._model.getMovieName(id);
    //    mainModel.selectHeroes(nameMovie).then((heroes) => {
    //      this._setActiveMovie(selectedMovie);
    //      this._setTitle(nameMovie);
    //      heroesView(heroes);
    //    });
    //  });

    //  this._elements.heroesMovies.addEventListener(
    //    "mouseenter",
    //    (e) => {
    //      const currentTarget = e.target.closest(".heroes__movie-item");
    //      if (currentTarget) {
    //        this._highlightMovie(currentTarget);
    //      }
    //    },
    //    true
    //  );

    //  this._elements.heroesMovies.addEventListener("mouseleave", () => {
    //    this._highlightMovie();
    //  });
  }

  _createHero(heroesItem) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("swiper-slide");

    card.dataset.heroesName = heroesItem.name;
    card.innerHTML = `
    <div class="card__photo">
      <img
        data-src="${heroesItem.photo}"
        src="./img/avengers-logo.png"
        alt=""
        class="swiper-lazy card__image"
      />
    </div>
    `;
    //<div class="swiper-lazy-preloader"></div>
    this._elements.cardWrapper.append(card);
  }

  rebuildList() {
    this._elements.cardWrapper.innerHTML = "";

    this._model.getHeroes().forEach((hero) => {
      hero.photo = `./db/${hero.photo}`;
      this._createHero(hero);
    });
    //createLastPreviewCard
    this._createHero({
      name: "",
      photo: "./img/avengers-logo.png",
    });
    this._elements.swiper.update();
    const heroesName = this._elements.cardWrapper.querySelector(".swiper-slide-active").dataset.heroesName;
    infoRender(this._model.getHeroes().find((theHero) => theHero.name == heroesName));
    this._elements.swiper.lazy.load();
  }
}
