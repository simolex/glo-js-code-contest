import { infoRender } from "./infoRender";

export const heroesView = (heroes) => {
  const swiper = document.querySelector(".swiper");
  const cardWrapper = document.querySelector(".cards__wrapper");

  const createCard = (heroesItem) => {
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
    cardWrapper.append(card);
  };

  cardWrapper.innerHTML = "";
  heroes.forEach((hero) => {
    hero.photo = `./db/${hero.photo}`;
    createCard(hero);
  });

  //createLastPreviewCard
  createCard({
    name: "",
    photo: "./img/avengers-logo.png",
  });

  swiper.swiper.update();
  const heroesName = cardWrapper.querySelector(".swiper-slide-active").dataset.heroesName;
  infoRender(heroes.find((theHero) => theHero.name == heroesName));
  swiper.swiper.lazy.load();
};
