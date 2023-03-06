const hiddenInputErrorStatus = (inputElement, inputErrorClass, errorElement, errorClass) => {
  errorElement.textContent = '';
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
};

const showInputErrorStatus = (inputElement, inputErrorClass, errorElement, message, errorClass) => {
  errorElement.textContent = message;
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
};

const toggleInputStatus = (inputElement, options) => {
  const errorElement = options.form.querySelector(`#${inputElement.id}-error`);
  if (inputElement.validity.valid) {
    hiddenInputErrorStatus(inputElement, options.inputErrorClass, errorElement, options.errorClass);
  } else {
    showInputErrorStatus(inputElement, options.inputErrorClass, errorElement, inputElement.validationMessage, options.errorClass);
  }
};

const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(inactiveButtonClass);
};

const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.setAttribute('disabled', 'on');
  buttonElement.classList.add(inactiveButtonClass);
};

const toggleButtonStatus = (inputs, submitElement, inactiveButtonClass) => {
  const formValidity = inputs.every(inputElement => inputElement.validity.valid);
  if (formValidity) {
    enableButton(submitElement, inactiveButtonClass);
  } else {
    disableButton(submitElement, inactiveButtonClass);
  }
};

const enableValidation = (options) => {
  const submitElement = options.form.querySelector(options.submitButtonSelector);
  const inputs = Array.from(options.form.querySelectorAll(options.inputSelector));
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleInputStatus(inputElement, options);
      toggleButtonStatus(inputs, submitElement, options.inactiveButtonClass);
    });
  });
  toggleButtonStatus(inputs, submitElement, options.inactiveButtonClass);
};

const disableValidation = (options) => {
  const submitElement = options.form.querySelector(options.submitButtonSelector);
  const inputs = Array.from(options.form.querySelectorAll(options.inputSelector));
  inputs.forEach((inputElement) => {
    const errorElement = options.form.querySelector(`#${inputElement.id}-error`);
    inputElement.removeEventListener('input', () => {
      toggleInputStatus(inputElement, options);
      toggleButtonStatus(inputs, submitElement, options.inactiveButtonClass);
    });
    hiddenInputErrorStatus(inputElement, options.inputErrorClass, errorElement, options.errorClass);
  });
  options.form = {};
};
