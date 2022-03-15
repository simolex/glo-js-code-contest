import { heroesView } from "./heroesView";
export const moviesSelector = (movies) => {
  const heroesMovies = document.getElementById("heroes_movies");
  let activeMovieOption;

  const insertOption = (nameOpt, valueOpt) => {
    const option = document.createElement("li");
    option.classList.add("heroes__movie-item");

    option.dataset.movies = valueOpt;
    option.textContent = nameOpt;
    heroesMovies.append(option);
  };
  movies.forEach((movie, index) => {
    insertOption(movie, index);
  });

  const markingMovieOption = (markerClass, elem = {}) => {
    heroesMovieOptions.forEach((item) => {
      if (elem !== {} && item === elem) {
        item.classList.add(markerClass);
      } else {
        item.classList.remove(markerClass);
      }
    });
  };

  const heroesMovieOptions = document.querySelectorAll(".heroes__movie-item");

  mainModel.selectHeroes(0).then((heroes) => {
    heroesView(heroes);
  });

  markingMovieOption("heroes__movie-item--active", document.querySelector(`[data-movies="0"]`));

  heroesMovies.addEventListener("click", (e) => {
    const selectedMovie = e.target.closest(".heroes__movie-item");
    const id = selectedMovie.dataset.movies;
    mainModel.selectHeroes(id).then((heroes) => {
      heroesView(heroes);
      markingMovieOption("heroes__movie-item--active", selectedMovie);
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
