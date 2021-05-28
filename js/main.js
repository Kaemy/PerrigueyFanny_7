"use strict";

import { RECIPES } from "./data/recipesData";
import { DataFetcher } from "./data/dataFetcher";
import { HomePageBuilder } from "./components/homePageBuilder";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();

new HomePageBuilder(recipesList).render();