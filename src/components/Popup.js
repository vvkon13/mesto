export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._element.classList.remove('popup_opened');
  }

  _handleEscClose = (evt) => {
    if ((evt.key) === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__button-close')) {
        this.close()
      }
    });
  }
}
