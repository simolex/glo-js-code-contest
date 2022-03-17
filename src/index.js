import { heroesModel } from "./modules/heroesModel";
import Swiper, { Navigation, Lazy } from "swiper";
import { infoRender } from "./modules/infoRender";
//import { moviesSelector } from "./modules/moviesSelector";

//--------------------
import { ListMoviesController } from "./modules/controllers/ListMoviesController";
import { ListMoviesModel } from "./modules/models/ListMoviesModel";
import { ListMoviesView } from "./modules/views/ListMoviesView";
//--------------------
import { HeroesListController } from "./modules/controllers/HeroesListController";
import { HeroesListModel } from "./modules/models/HeroesListModel";
import { HeroesListView } from "./modules/views/HeroesListView";
//--------------------

let filterGroups = {};

// const swiper = new Swiper(".swiper", {
//   modules: [Navigation, Lazy],
//   //preloadImages: false,
//   lazy: {
//     loadPrevNextAmount: 2,
//   },

//   slidesPerView: 2,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: ".heroes__button--next",
//     prevEl: ".heroes__button--prev",
//     disabledClass: "heroes__button--disabled",
//   },
// });

// const onSlideChange = function () {
//   mainModel.getHeroes(document.querySelector(".swiper-slide-active").dataset.heroesName).then((heroes) => {
//     infoRender(heroes);
//   });
// };

//swiper.on("slideChangeTransitionEnd", onSlideChange);
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

  const modelMovies = new ListMoviesModel(filterGroups.movies.sort());
  const viewMovies = new ListMoviesView(modelMovies, {
    heroesMovies: document.getElementById("heroes_movies"),
    moviesTitle: document.querySelector(".heroes__title"),
    classHighlight: "heroes__movie-item--selected",
    classActive: "heroes__movie-item--active",
  });
  const controllerMovies = new ListMoviesController(modelMovies, viewMovies);
  //-------------------
  const modelHeroes = new HeroesListModel();
  //window.modelHeroes = modelHeroes;
  const viewHeroes = new HeroesListView(modelHeroes, {
    cardWrapper: document.querySelector(".cards__wrapper"),
    swiper: new Swiper(".swiper", {
      modules: [Navigation, Lazy],
      //preloadImages: false,
      lazy: {
        loadPrevNextAmount: 2,
      },

      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".heroes__button--next",
        prevEl: ".heroes__button--prev",
        disabledClass: "heroes__button--disabled",
      },
    }),
  });
  const controllerHeroes = new HeroesListController(modelHeroes, viewHeroes);
  modelMovies.subscribe("movieSelected", (heroes) => modelHeroes.setHeroesList(heroes));

  viewMovies.show();
});
