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

const toggleInputStatus = (inputElement, options, formInstance) => {
  const errorElement = formInstance.querySelector(`#${inputElement.id}-error`);
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

const enableValidationFormInstance = (options, form) => {
  const formInstance = form;
  const submitElement = formInstance.querySelector(options.submitButtonSelector);
  const inputs = Array.from(formInstance.querySelectorAll(options.inputSelector));
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleInputStatus(inputElement, options, formInstance);
      toggleButtonStatus(inputs, submitElement, options.inactiveButtonClass);
    });
  });
  toggleButtonStatus(inputs, submitElement, options.inactiveButtonClass);
};

const enableValidationForms = (options) => {
  const forms = Array.from(document.forms);
  forms.forEach((formInstance) => {
    enableValidationFormInstance(options, formInstance);
  });
};

const checkingErrorForm = (formInstance, options) => {
  const submitElement = formInstance.querySelector(options.submitButtonSelector);
  const inputs = Array.from(formInstance.querySelectorAll(options.inputSelector));
  inputs.forEach((inputElement) => {
    toggleInputStatus(inputElement, options, formInstance);
  });
  toggleButtonStatus(inputs, submitElement, options.inactiveButtonClass);
}

const clearingErrorsFromScreenForm = (formInstance, options) => {
  const inputs = Array.from(formInstance.querySelectorAll(options.inputSelector));
  inputs.forEach((inputElement) => {
    const errorElement = formInstance.querySelector(`#${inputElement.id}-error`);
    hiddenInputErrorStatus(inputElement, options.inputErrorClass, errorElement, options.errorClass);
  });
}


