import Popup from "./Popup.js";
export default class PopupConfirmDeleteElement extends Popup {
  constructor(popupSelector, { deleteCard }) {
    super(popupSelector);
    this._handleFormSubmit = deleteCard;
    this._form = this._element.querySelector('form');
  }

  getCardDeleted() {
    return this._cardDeleted;
  }

  open(card) {
    this._cardDeleted = card;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getCardDeleted());
    });
  }
}



