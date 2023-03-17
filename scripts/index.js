const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const popupProfileWrapper = document.querySelector('.popup_type_profile');
const popupCardWrapper = document.querySelector('.popup_type_card');

const popupProfileName = document.querySelector('[name="popup-name"]');
const popupCardTitle = document.querySelector('[name="popup-card-title"]');
const popupProfileDescription = document.querySelector('[name="popup-description"]');
const popupCardLink = document.querySelector('[name="popup-card-link"]');

const popups = document.querySelectorAll('.popup');
const popupImageWrapper = document.querySelector('.popup_type_image');
const popupImageImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__description');

const formPopupProfile = document.querySelector('[name="popup-profile"]');
const formPopupCard = document.querySelector('[name="popup-card"]');

const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');

let arrayFormControllers = [];

const validationOptions = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_visually-erroneous',
  errorClass: 'popup__input-error_active'
};



class Card {
  constructor (name, link, selectorTemplateElement){
    this._name = name;
    this._link = link;
    this._selectorTemplateElement = selectorTemplateElement;
  }

  renderItem = (wrap) => {
    wrap.prepend(this._getItemElement())
  }

  _setEventListenerClickImage = () => {
    this._itemImage.addEventListener('click', callPopupImage);
  }

  _setEventListenerClickLike = () => {
    this._like.addEventListener('click', this._clickLike);

  }

  _setEventListenerClickTrash =() => {
    this._trash.addEventListener('click', this._removeCard);
  }
  _getItemElement = () => {
    this._element = this._selectorTemplateElement.content.cloneNode(true);
    this._itemTitle = this._element.querySelector('.card__name');
    this._itemTitle.textContent = this._name;
    this._itemImage = this._element.querySelector('.card__photo');
    this._itemImage.src = this._link;
    this._itemImage.alt = `Фото ${this._name}`;
    this._setEventListenerClickImage();
    this._like = this._element.querySelector('.card__button-like');
    this._setEventListenerClickLike();
    this._trash = this._element.querySelector('.card__button-remove');
    this._setEventListenerClickTrash();
    return this._element;
  }

  _clickLike = () => {
    this._like.classList.toggle('card__button-like_active');
  }

  _removeCard = () => {
    this._element.remove();
  }

}

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
      this._hiddenInputErrorStatus(inputElement,errorElement);
    } else {
      this._showInputErrorStatus(inputElement,errorElement);
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







function handlerСlosePopupIfKeyEscape(evt) {
  if ((evt.key) === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handlerСlosePopupIfKeyEscape);
}

function callPopupProfile(evt) {
  const formController = arrayFormControllers.find(item => item._formInstance === formPopupProfile);
  popupProfileName.value = profileName.textContent;
  popupProfileDescription.value = profileDescription.textContent;
  formController._checkingErrorForm();
  openPopup(popupProfileWrapper);
}

function callPopupCard(evt) {
  popupCardTitle.value = '';
  popupCardLink.value = '';
  // inputs - пустые деактивируем кнопку
  // const formInstance = popupCardWrapper.querySelector('form');
  const formController = arrayFormControllers.find(item => item._formInstance === formPopupCard);
  formController._disableButton();
  formController._clearingErrorsFromScreenForm();
  openPopup(popupCardWrapper);
}

function callPopupImage(evt) {
  popupImageImage.src = evt.target.src;
  popupImageImage.alt = evt.target.alt;
  const cardParentCall = evt.target.closest('.card');
  const descriptionCardParentCall = cardParentCall.querySelector('.card__description');
  popupImageDescription.textContent = descriptionCardParentCall.textContent;
  openPopup(popupImageWrapper);
}

function savePopupProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  closePopup(popupProfileWrapper);
}

function savePopupCard(evt) {
  evt.preventDefault();
  // const cardRecordable = { name: popupCardTitle.value, link: popupCardLink.value };

  const cardElement = new Card (popupCardTitle.value, popupCardLink.value, templateCard);
  cardElement.renderItem(itemListWrapper);

  // renderItem(itemListWrapper, cardRecordable);
  closePopup(popupCardWrapper);
}

/* function clickLike() {
  this.classList.toggle('card__button-like_active');
}

function removeCard(evt) {
  const card = evt.target.closest('.card');
  card.remove();
}
 */
/* const getItemElement = (card) => {
  const newItemElement = templateCard.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector('.card__name');
  newItemTitle.textContent = card.name;
  const newItemImage = newItemElement.querySelector('.card__photo');
  newItemImage.src = card.link;
  newItemImage.alt = `Фото ${card.name}`;
  newItemImage.addEventListener('click', callPopupImage);
  const like = newItemElement.querySelector('.card__button-like');
  like.addEventListener('click', clickLike);
  const trash = newItemElement.querySelector('.card__button-remove');
  trash.addEventListener('click', removeCard);
  return newItemElement;
}
 */
/* const renderItem = (wrap, card) => {
  wrap.prepend(getItemElement(card))
}
 */

function closePopup(popup) {
  document.removeEventListener('keydown', handlerСlosePopupIfKeyEscape);
  popup.classList.remove('popup_opened');
}

const enableValidationForms = (options) => {
  const forms = Array.from(document.forms);
  forms.forEach((formInstance) => {
    const formController = new FormValidator (formInstance,options);
    arrayFormControllers.push(formController);
    formController.enableValidation();
  });
};


initialCards.forEach((card) => {
  const cardElement = new Card (card.name, card.link, templateCard);
  cardElement.renderItem(itemListWrapper);
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
