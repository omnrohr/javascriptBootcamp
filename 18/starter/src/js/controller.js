import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import paginationView from './views/paginationView';
import resultsView from './views/resultsView';
import bookMarksView from './views/bookMarksView';
import addRecipeView from './views/addRecipeView';

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    resultsView.update(model.getSearchResultPage());

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);

    bookMarksView.update(model.state.bookMarks);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    searchView.clear();
    await model.loadSearchResults(query);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    paginationView.render(model.state.search);
  } catch (err) {
    throw err;
  }
};
// window.addEventListener('hashchange', getData);
// window.addEventListener('load', getData);

const pagePagination = function (page) {
  resultsView.render(model.getSearchResultPage(page));

  paginationView.render(model.state.search);
};

const controlServings = function (servings) {
  model.updateServings(servings);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookMarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.ID);

  recipeView.update(model.state.recipe);

  bookMarksView.render(model.state.bookMarks);
};

const controlBookmarks = function () {
  bookMarksView.render(model.state.bookMarks);
};

const controlAddNewRecipe = async function (newRecipe) {
  try {
    await model.uploadData(newRecipe);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookMarksView.addHandlerBookmark(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addPaginationClickHandler(pagePagination);
  addRecipeView._addHandlerSubmit(controlAddNewRecipe);
};

init();
