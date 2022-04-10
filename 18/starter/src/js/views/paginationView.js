import View from './View';
import icons from '../../img/icons.svg';
import { state } from '../model';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addPaginationClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    // scenarios
    // 1- page 1 and there are other pages
    if (numPages > 1 && this._data.page === 1) {
      return `

          <button data-goto="${
            this._data.page + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // 3- last page
    if (numPages === this._data.page && numPages > 1) {
      return `
        <button data-goto="${
          this._data.page - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>`;
    }
    // 4- other page
    if (this._data.page < numPages) {
      return `
      <button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page - 1}</span>
    </button>
    <button data-goto="${
      this._data.page + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${this._data.page + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>
      `;
    }
    // 2- page 1 and there is no other pages
    // if (!numPages || numPages === 1) return `one page only`;
    // or
    return `no other pages only one page`;
  }
}

export default new PaginationView();
