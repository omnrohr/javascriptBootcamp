import View from './View';
import icons from '../../img/icons.svg';

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'Sorry, we could not find any bookmarks!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(this._renderResults).join('');
  }

  addHandlerBookmark(handler) {
    window.addEventListener('load', handler);
  }

  _renderResults(result) {
    const curId = window.location.hash.slice(1);
    return `
        <li class="preview">
              <a class=" preview__link ${
                result.ID === curId ? 'preview__link--active' : ''
              }" href="#${result.ID}">
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

export default new BookMarksView();
