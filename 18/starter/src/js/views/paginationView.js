import View from './View';
import icons from '../../img/icons.svg';
import { state } from '../model';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    // scenarios
    // 1- page 1 and there are other pages
    if (numPages > 1 && this._data.page === 1) {
      return `page1 and others`;
    }

    // 3- last page
    if (numPages === this._data.page && numPages > 1) {
      return `last page`;
    }
    // 4- other page
    if (this._data.page < numPages) {
      return `other page`;
    }
    // 2- page 1 and there is no other pages
    // if (!numPages || numPages === 1) return `one page only`;
    // or
    return `no other pages only one page`;
  }
}

export default new PaginationView();
