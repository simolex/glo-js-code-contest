import { EventEmitter } from "../EventEmitter";
//import { infoRender } from "../infoRender";

export class HeroesListView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;

    model.subscribe("listSetted", () => this.rebuildList());

    this._elements.swiper.on("slideChangeTransitionEnd", () => {
      const heroesName =
        this._elements.cardWrapper.querySelector(".swiper-slide-active").dataset.heroesName;
      const heroMetrics = this._model.getHeroes().find((theHero) => theHero.name == heroesName);

      this._model.emit("heroSelected", heroMetrics);
    });
  }

  _createHero(heroesItem) {
    const heroCard = document.createElement("div");
    heroCard.classList.add("card");
    heroCard.classList.add("swiper-slide");

    heroCard.dataset.heroesName = heroesItem.name;
    heroCard.innerHTML = `
    <div class="card__photo">
      <img
        data-src="${heroesItem.photo}"
        src="./img/avengers-logo.png"
        alt=""
        class="swiper-lazy card__image"
      />
    </div>
    `;
    this._elements.cardWrapper.append(heroCard);
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
    this._elements.swiper.lazy.load();

    const heroesName =
      this._elements.cardWrapper.querySelector(".swiper-slide-active").dataset.heroesName;
    const heroMetrics = this._model.getHeroes().find((theHero) => theHero.name == heroesName);

    this._model.emit("heroSelected", heroMetrics);
  }
}
