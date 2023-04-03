import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { savePopup }) {
    super(popupSelector);
    this._handleFormSubmit = savePopup;
    this._form = this._element.querySelector('form');
    this._inputList = this._element.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setInputValues(...args) {
    if (args.length > 0) {
      let i = 0;
      this._inputList.forEach(input => {
        input.value = args[i];
        i++;
      });
    }
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}