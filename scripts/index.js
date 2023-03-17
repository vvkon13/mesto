import FormValidator from './FormValidator.js';
import { initialCards } from './arrayOfCards.js';
import { closePopup, callPopupProfile, callPopupCard, savePopupProfile, savePopupCard, formPopupProfile, formPopupCard, arrayFormControllers, generateCard } from './popups.js'

const popups = document.querySelectorAll('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');

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


initialCards.forEach((card) => {
  generateCard(card.name, card.link);
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
});

enableValidationForms(validationOptions);

buttonEdit.addEventListener('click', callPopupProfile);
buttonNewPlace.addEventListener('click', callPopupCard);
formPopupProfile.addEventListener('submit', savePopupProfile);
formPopupCard.addEventListener('submit', savePopupCard);

