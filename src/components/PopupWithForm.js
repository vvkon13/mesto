import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { savePopup }) {
    super(popupSelector);
    this._handleFormSubmit = savePopup;
    this._form = this._element.querySelector('form');
    this._inputList = this._element.querySelectorAll('.popup__input');
    this._submitButton = this._element.querySelector('.popup__button-save');
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setInputValues(data) {
    this._inputList.forEach(input => {
      if (data[input.name]) input.value = data[input.name]
    });
  }

  resetForm() {
    this._form.reset();
  }

  close() {
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = "Сохранение...";
      this._handleFormSubmit(this._getInputValues())
      .finally(()=>{
        this._submitButton.textContent = initialText;
      })
      .catch(() => {
        console.log('Произошла ошибка записи формы на сервер');
      })
    });
  }
}
