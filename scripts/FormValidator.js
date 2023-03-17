class FormValidator {
  constructor(formInstance, options) {
    this._formInstance = formInstance;
    this._options = options;
  }

  enableValidation = () => {
    this._submitElement = this._formInstance.querySelector(this._options.submitButtonSelector);
    this._inputs = Array.from(this._formInstance.querySelectorAll(this._options.inputSelector));
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputStatus(inputElement);
        this._toggleButtonStatus();
      });
    });
    this._toggleButtonStatus();
  };

  _toggleButtonStatus = () => {
    const formValidity = this._inputs.every(inputElement => inputElement.validity.valid);
    if (formValidity) {
      this.enableButton();
    } else {
      this.disableButton();
    }
  };

  disableButton = () => {
    this._submitElement.setAttribute('disabled', 'on');
    this._submitElement.classList.add(this._options.inactiveButtonClass);
  };

  enableButton = () => {
    this._submitElement.removeAttribute('disabled');
    this._submitElement.classList.remove(this._options.inactiveButtonClass);
  };

  _toggleInputStatus = (inputElement) => {
    const errorElement = this._formInstance.querySelector(`#${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      this._hideInputErrorStatus(inputElement, errorElement);
    } else {
      this._showInputErrorStatus(inputElement, errorElement);
    }
  };

  _showInputErrorStatus = (inputElement, errorElement) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._options.inputErrorClass);
    errorElement.classList.add(this._options.errorClass);
  };

  hideErrorstatus
  _hideInputErrorStatus = (inputElement, errorElement) => {
    errorElement.textContent = '';
    inputElement.classList.remove(this._options.inputErrorClass);
    errorElement.classList.remove(this._options.errorClass);
  };

  checkFormForErrors = () => {
    this._inputs.forEach((inputElement) => {
      this._toggleInputStatus(inputElement);
    });
    this._toggleButtonStatus();
  }

  clearValidationErrors = () => {
    this._inputs.forEach((inputElement) => {
      const errorElement = this._formInstance.querySelector(`#${inputElement.id}-error`);
      this._hideInputErrorStatus(inputElement, errorElement);
    });
  }
}

export default FormValidator;
