"use strict";

import { RECIPES } from "./data/recipesData";
import { DataFetcher } from "./data/dataFetcher";
import { PageManager } from "./components/pageManager";

const dataFetcher = new DataFetcher(RECIPES);
const recipesList = dataFetcher.getRecipesList();

recipesList.sortByName();

const pageManager = new PageManager(recipesList);

pageManager.render();