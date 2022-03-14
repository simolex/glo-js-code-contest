import sliderMain from "./modules/slider";
import { heroesModel } from "./modules/heroesModel";
import { moviesSelector } from "./modules/moviesSelector";

sliderMain();

window.mainModel = new heroesModel("./db/dbHeroes.json");
//controls();
