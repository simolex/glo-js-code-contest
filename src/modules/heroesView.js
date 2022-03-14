export const heroesView = (heroes) => {
  const cardWrapper = document.querySelector(".cards__wrapper");
  cardWrapper.innerHTML = "";
  heroes.forEach((hero) => {
    const card = document.createElement("card");

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
};
