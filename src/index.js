import sliderMain from "./modules/slider";
import { heroesModel } from "./modules/heroesModel";

sliderMain();

window.mainPage = new heroesModel("./db/dbHeroes.json");
