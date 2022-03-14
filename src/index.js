import { heroesModel } from "./modules/heroesModel";
import Swiper, { Navigation } from "swiper";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  //loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //centeredSlides: true,
  //centeredSlidesBounds: true,
});

//sliderMain();

window.mainModel = new heroesModel("./db/dbHeroes.json");
//controls();
