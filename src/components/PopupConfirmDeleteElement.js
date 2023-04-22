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

  getCardIdtDeleted() {
    return this._cardIdDeleted;
  }

  open(card, cardId) {
    this._cardDeleted = card;
    this._cardIdDeleted = cardId;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getCardIdtDeleted(),this.getCardDeleted());
    });
  }
}



