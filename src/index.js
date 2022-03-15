import { heroesModel } from "./modules/heroesModel";
import Swiper, { Navigation } from "swiper";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  //loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".heroes__button--next",
    prevEl: ".heroes__button--prev",
    disabledClass: ".heroes__button--disabled",
  },

  //centeredSlides: true,
  //centeredSlidesBounds: true,
});
const onSlideChange = function () {
  mainModel
    .getHeroes(document.querySelector(".swiper-slide-active").dataset.heroesName)
    .then((heroes) => {
      console.log(2, heroes);
    });
};
swiper.on("slideChangeTransitionEnd", onSlideChange);

//sliderMain();

window.mainModel = new heroesModel("./db/dbHeroes.json");
//controls();
