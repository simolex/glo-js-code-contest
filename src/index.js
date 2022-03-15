import { heroesModel } from "./modules/heroesModel";
import Swiper, { Navigation } from "swiper";
import { infoView } from "./modules/infoView";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  //loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".heroes__button--next",
    prevEl: ".heroes__button--prev",
    disabledClass: "heroes__button--disabled",
  },
});

const onSlideChange = function () {
  mainModel.getHeroes(document.querySelector(".swiper-slide-active").dataset.heroesName).then((heroes) => {
    infoView(heroes);
  });
};
swiper.on("slideChangeTransitionEnd", onSlideChange);
window.mainModel = new heroesModel("./db/dbHeroes.json");
