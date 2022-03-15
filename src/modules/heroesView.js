import { infoView } from "./infoView";
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
        src="${heroesItem.photo}"
        alt=""
        class="card__image"
      />
    </div>
    `;
    cardWrapper.append(card);
  };

  cardWrapper.innerHTML = "";
  heroes.forEach((hero) => {
    hero.photo = `./db/${hero.photo}`;
    createCard(hero);
  });

  createCard({
    name: "",
    photo: "./img/avengers-logo.png",
  });

  swiper.swiper.updateSlides();
  swiper.swiper.update();
  mainModel
    .getHeroes(document.querySelector(".swiper-slide-active").dataset.heroesName)
    .then((heroes) => {
      infoView(heroes);
    });

  // swiper.swiper.off("slideChangeTransitionEnd", onSlideChange);

  // swiper.
};
