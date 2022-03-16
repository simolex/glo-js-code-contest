import { heroesView } from "./heroesView";
export const moviesSelector = (moviesList) => {
  const heroesMovies = document.getElementById("heroes_movies");

  const insertOption = (nameOpt, valueOpt) => {
    const option = document.createElement("li");
    option.classList.add("heroes__movie-item");

    option.dataset.movies = valueOpt;
    option.textContent = nameOpt;
    heroesMovies.append(option);
  };

  const markingMovieOption = (markerClass, elem = {}) => {
    heroesMovieOptions.forEach((item) => {
      if (elem !== {} && item === elem) {
        item.classList.add(markerClass);
      } else {
        item.classList.remove(markerClass);
      }
    });
  };

  moviesList.forEach((movie, index) => {
    insertOption(movie, index);
  });

  mainModel.selectHeroes(moviesList[0]).then((heroes) => {
    heroesView(heroes);
  });

  const firstMovie = document.querySelector(`[data-movies="0"]`);
  const heroesMovieOptions = document.querySelectorAll(".heroes__movie-item");
  markingMovieOption("heroes__movie-item--active", firstMovie);

  heroesMovies.addEventListener("click", (e) => {
    const selectedMovie = e.target.closest(".heroes__movie-item");
    const id = selectedMovie.dataset.movies;

    mainModel.selectHeroes(moviesList[id]).then((heroes) => {
      markingMovieOption("heroes__movie-item--active", selectedMovie);
      heroesView(heroes);
    });
  });

  heroesMovies.addEventListener(
    "mouseenter",
    (e) => {
      const currentTarget = e.target.closest(".heroes__movie-item");
      if (currentTarget) {
        markingMovieOption("heroes__movie-item--selected", currentTarget);
      }
    },
    true
  );

  heroesMovies.addEventListener("mouseleave", () => {
    markingMovieOption("heroes__movie-item--selected");
  });
};
