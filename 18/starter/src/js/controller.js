import icons from 'url:../img/icons.svg';
import * as model from './model';
import recipeView from './views/recipeView';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function (parentEl) {
  const markUp = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
      `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markUp);
};

const controlRecipes = async function () {
  try {
    // const id = window.location.hash.slice(1);
    const id = '5ed6604591c37cdc054bcc40';
    if (!id) return;
    renderSpinner(recipeContainer);

    await model.loadRecipe(id);
    console.log(model.state.recipe);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

// window.addEventListener('hashchange', getData);
// window.addEventListener('load', getData);

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipes)
);
