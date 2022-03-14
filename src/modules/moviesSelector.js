import { heroesView } from "./heroesView";
export const moviesSelector = (movies) => {
  const heroesMovies = document.getElementById("heroes_movies");

  const insertOption = (nameOpt, valueOpt) => {
    const option = document.createElement("option");
    option.value = valueOpt;
    option.textContent = nameOpt;
    heroesMovies.append(option);
  };

  insertOption("Select movies...", "");

  movies.forEach((movie, index) => {
    insertOption(movie, index);
  });

  heroesMovies.addEventListener("change", (e) => {
    const id = e.target.options[e.target.selectedIndex].value;
    if (id !== "") {
      mainModel.selectHeroes(id).then((heroes) => {
        heroesView(heroes);
      });
    }
  });
};
