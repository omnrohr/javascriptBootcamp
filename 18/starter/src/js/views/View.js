import icons from '../../img/icons.svg';
export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    // if (!this.#data.image) return;
    this.clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }

  clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markUp = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
          `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderError(message = this._errorMessage) {
    const markUp = `
          <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
          </div>
        `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderMessage(message = this._successMessage) {
    const markUp = `
          <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
          </div>
        `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
}
