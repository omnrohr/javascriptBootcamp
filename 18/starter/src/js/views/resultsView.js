import View from './View';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'Sorry, we could not find any result matches your search. please try another one!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(this._renderResults).join('');
  }
  _renderResults(result) {
    return `
        <li class="preview">
              <a class="preview__link" href="#${result.ID}">
                <figure class="preview__fig">
                  <img src="${result.image}" alt="${result.title}" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">${result.title}</h4>
                  <p class="preview__publisher">${result.publisher}</p>
                </div>
              </a>
          </li>
        `;
  }
}

export default new ResultsView();
