import { heroesDB } from "./modules/heroesDB";
import Swiper, { Navigation, Lazy } from "swiper";
//--------------------
import { HeaderController } from "./modules/controllers/HeaderController";
import { HeaderModel } from "./modules/controllers/HeaderModel";
import { HeaderView } from "./modules/controllers/HeaderView";
//--------------------
import { MoviesListController } from "./modules/controllers/MoviesListController";
import { MoviesListModel } from "./modules/models/MoviesListModel";
import { MoviesListView } from "./modules/views/MoviesListView";
//--------------------
import { HeroesListController } from "./modules/controllers/HeroesListController";
import { HeroesListModel } from "./modules/models/HeroesListModel";
import { HeroesListView } from "./modules/views/HeroesListView";
//--------------------
import { MetricsController } from "./modules/controllers/MetricsController";
import { MetricsModel } from "./modules/models/MetricsModel";
import { MetricsView } from "./modules/views/MetricsView";
//--------------------

let filterGroups = {};

window.mainDB = new heroesDB("http://localhost:4545/heroes/");
//mainModel;
mainDB.getData().then((data) => {
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

  const modelHeader = new HeaderModel(filterGroups.movies.sort());
  const viewHeader = new HeaderView(modelHeader, {
    heroesMovies: document.getElementById("heroes_movies"),
    moviesTitle: document.querySelector(".heroes__title"),
    classHighlight: "heroes__movie-item--selected",
    classActive: "heroes__movie-item--active",
    classShare: "heroes__movie-item--share",
  });
  const controllerHeader = new HeaderController(modelHeader, viewHeader);
  //-------------------
  const modelMovies = new MoviesListModel(filterGroups.movies.sort());
  const viewMovies = new MoviesListView(modelMovies, {
    heroesMovies: document.getElementById("heroes_movies"),
    moviesTitle: document.querySelector(".heroes__title"),
    classHighlight: "heroes__movie-item--selected",
    classActive: "heroes__movie-item--active",
    classShare: "heroes__movie-item--share",
  });
  const controllerMovies = new MoviesListController(modelMovies, viewMovies);

  //-------------------
  const modelHeroes = new HeroesListModel();
  const viewHeroes = new HeroesListView(modelHeroes, {
    cardWrapper: document.querySelector(".cards__wrapper"),
    swiper: new Swiper(".swiper", {
      modules: [Navigation, Lazy],
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
  modelMovies.subscribe("movieSelected", (movie) => modelHeroes.createHeroesList(movie));
  //-------------------
  const modelMetrics = new MetricsModel();
  const viewMetrics = new MetricsView(modelMetrics, {
    infoWrapper: document.querySelector(".info"),
  });
  const controllerMetrics = new MetricsController(modelMetrics, viewMetrics);
  modelHeroes.subscribe("heroSelected", (heroMetrics) => modelMetrics.setMetrics(heroMetrics));
  modelMetrics.subscribe("metricsSetted", (heroMetrics) => modelMovies.setShareList(heroMetrics.movies));
  modelMovies.subscribe("shareListChanged", (moviesList) => modelMetrics.setMoviesList(moviesList));
  //-------------------
  viewMovies.show();
});
