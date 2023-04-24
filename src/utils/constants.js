const templateCard = document.getElementById('card');
const formControllers = {};
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');
const avatarWrapper = document.querySelector('.profile__photo-wrapper');

const validationOptions = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_visually-erroneous',
  errorClass: 'popup__input-error_active'
};

export {templateCard, formControllers, buttonEdit, buttonNewPlace, avatarWrapper, validationOptions}
