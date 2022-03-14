export const heroesView = (heroes) => {
  const swiper = document.querySelector(".swiper");
  const cardWrapper = document.querySelector(".cards__wrapper");
  cardWrapper.innerHTML = "";
  heroes.forEach((hero) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("swiper-slide");

    card.innerHTML = `
    <div class="card__photo">
      <img
        src="./db/${hero.photo}"
        alt=""
        class="card__image"
      />
    </div>
    <div class="card__content"></div>
    `;
    cardWrapper.append(card);
  });
  swiper.swiper.updateSlides();
  swiper.swiper.update();
};
