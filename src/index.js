import { heroesModel } from "./modules/heroesModel";
import Swiper, { Navigation } from "swiper";
import { infoRender } from "./modules/infoRender";
import { moviesSelector } from "./modules/moviesSelector";

let filterGroups = {};

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".heroes__button--next",
    prevEl: ".heroes__button--prev",
    disabledClass: "heroes__button--disabled",
  },
});

const onSlideChange = function () {
  mainModel
    .getHeroes(document.querySelector(".swiper-slide-active").dataset.heroesName)
    .then((heroes) => {
      infoRender(heroes);
    });
};

swiper.on("slideChangeTransitionEnd", onSlideChange);
window.mainModel = new heroesModel("./db/dbHeroes.json");

mainModel.getData().then((data) => {
  data.forEach((heroes) => {
    for (let metric in heroes) {
      if (!filterGroups[metric] && metric === "movies") {
        filterGroups[metric] = [];
      }
      if (metric === "movies") {
        heroes[metric] &&
          heroes[metric].forEach((filmName) => {
            if (!filterGroups[metric].includes(filmName)) {
              filterGroups[metric].push(filmName);
            }
          });
      } //else {
      //   if (!filterGroups[metric].includes(heroes[metric])) {
      //     filterGroups[metric].push(heroes[metric]);
      //   }
      // }
    }
  });
  moviesSelector(filterGroups.movies.sort());
});
