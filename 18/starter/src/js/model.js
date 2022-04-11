import { API_URL, RESULT_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultPerPage: RESULT_PER_PAGE,
    page: 1,
  },
  bookMarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      ID: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
    };
    if (state.bookMarks.some(bookMarked => bookMarked.ID === id))
      state.recipe.bookMarked = true;
    else state.recipe.bookMarked = false;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(recipe => {
      return {
        ID: recipe.id,
        image: recipe.image_url,
        publisher: recipe.publisher,
        title: recipe.title,
      };
    });
    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  let start = (page - 1) * state.search.resultPerPage;
  let end = page * state.search.resultPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (servings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * servings) / state.recipe.servings;
  });

  state.recipe.servings = servings;
};

export const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
};

export const addBookmark = function (recipe) {
  state.bookMarks.push(recipe);
  if (recipe.ID === state.recipe.ID) state.recipe.bookMarked = true;
  persistBookmarks();
};

export const removeBookmark = function (id) {
  const index = state.bookMarks.findIndex(el => el.ID === id);
  state.bookMarks.splice(index, 1);
  if (id === state.recipe.ID) state.recipe.bookMarked = false;
  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) {
    state.bookMarks = JSON.parse(storage);
  }
};
init();
