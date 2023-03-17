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
      this._enableButton();
    } else {
      this._disableButton();
    }
  };

  _disableButton = () => {
    this._submitElement.setAttribute('disabled', 'on');
    this._submitElement.classList.add(this._options.inactiveButtonClass);
  };

  _enableButton = () => {
    this._submitElement.removeAttribute('disabled');
    this._submitElement.classList.remove(this._options.inactiveButtonClass);
  };

  _toggleInputStatus = (inputElement) => {
    const errorElement = this._formInstance.querySelector(`#${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      this._hiddenInputErrorStatus(inputElement, errorElement);
    } else {
      this._showInputErrorStatus(inputElement, errorElement);
    }
  };

  _showInputErrorStatus = (inputElement, errorElement) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._options.inputErrorClass);
    errorElement.classList.add(this._options.errorClass);
  };

  _hiddenInputErrorStatus = (inputElement, errorElement) => {
    errorElement.textContent = '';
    inputElement.classList.remove(this._options.inputErrorClass);
    errorElement.classList.remove(this._options.errorClass);
  };

  _checkingErrorForm = () => {
    this._inputs.forEach((inputElement) => {
      this._toggleInputStatus(inputElement);
    });
    this._toggleButtonStatus();
  }

  _clearingErrorsFromScreenForm = () => {
    this._inputs.forEach((inputElement) => {
      const errorElement = this._formInstance.querySelector(`#${inputElement.id}-error`);
      this._hiddenInputErrorStatus(inputElement, errorElement);
    });
  }
}

let arrayFormControllers = [];

const validationOptions = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_visually-erroneous',
  errorClass: 'popup__input-error_active'
};

const enableValidationForms = (options) => {
  const forms = Array.from(document.forms);
  forms.forEach((formInstance) => {
    const formController = new FormValidator(formInstance, options);
    arrayFormControllers.push(formController);
    formController.enableValidation();
  });
};


export { FormValidator, arrayFormControllers, validationOptions, enableValidationForms };
