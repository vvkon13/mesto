const hiddenError = (inputElement, inputSelectorClass, errorElement, inputErrorClass) => {
  errorElement.textContent = '';
  inputElement.classList.remove(inputSelectorClass);
  errorElement.classList.remove(inputErrorClass);
};

const showError = (inputElement, inputSelectorClass, errorElement, message, inputErrorClass) => {
  errorElement.textContent = message;
  inputElement.classList.add(inputSelectorClass);
  errorElement.classList.add(inputErrorClass);
};

const setInputState = (inputElement, isValid, options) => {
  const errorElement = options.form.querySelector(`#${inputElement.id}-error`);
  if (isValid) {
    hiddenError(inputElement,options.inputSelectorClass,errorElement, options.inputErrorClass);
  } else {
    showError(inputElement,options.inputSelectorClass, errorElement, inputElement.validationMessage, options.inputErrorClass);
  }
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  setInputState(inputElement, isValid, options);
};

const enableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(disabledButtonClass);
};

const disableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(disabledButtonClass);
};

const toggleButtonState = (inputs, submitElement, disabledButtonClass) => {
  const formIsValid = inputs.every(inputElement => inputElement.validity.valid);
  if (formIsValid) {
    enableButton(submitElement, disabledButtonClass);
  } else {
    disableButton(submitElement, disabledButtonClass);
  }
};

const enableValidation = (options) => {
  const submitElement = options.form.querySelector(options.submitSelector);
  const inputs = Array.from(options.form.querySelectorAll(options.inputSelector));
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, submitElement, options.disabledButtonClass);
    });
  });
  toggleButtonState(inputs, submitElement, options.disabledButtonClass);
};

const disableValidation = (options) => {
  const submitElement = options.form.querySelector(options.submitSelector);
  const inputs = Array.from(options.form.querySelectorAll(options.inputSelector));
  inputs.forEach(inputElement => {
    const errorElement = options.form.querySelector(`#${inputElement.id}-error`);
    inputElement.removeEventListener('input', () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, submitElement, options.disabledButtonClass);
    });
    hiddenError(inputElement,options.inputSelectorClass,errorElement,options.inputErrorClass);
  });
};
