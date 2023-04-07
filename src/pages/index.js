import './index.css';

// добавьте импорт главного файла стилей

import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../scripts/arrayOfCards.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const formPopupProfile = document.querySelector('[name="popup-profile"]');
const formPopupCard = document.querySelector('[name="popup-card"]');
const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');
const formControllers = {};
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
    formControllers[formInstance.name] = formController;
    formController.enableValidation();
  });
};

const cardList = [];

const cardSection = new Section({
  items: cardList,
  renderer: (card) => {
    itemListWrapper.prepend(card.getItemElement());
  }
}, '.elements');

const user1 = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description'
});

user1.setUserInfo({
  profileName: 'Жак',
  profileDescription: 'Кустов'
});

const popupProfile = new PopupWithForm('.popup_type_profile', {
  savePopup: (popupProfileValues) => {
    user1.setUserInfo(popupProfileValues);
    popupProfile.close();
  }
})

const createCard = (cardName, cardLink) => {
  const cardElement = new Card(cardName, cardLink, templateCard, handleCardClick);
  return cardElement;
}

const popupCard = new PopupWithForm('.popup_type_card', {
  savePopup: (popupProfileValues) => {
    const cardElement = createCard(popupProfileValues['popup-card-title'], popupProfileValues['popup-card-link']);
    cardSection.addItem(cardElement.getItemElement());
    popupCard.close();
  }
})

const popupImage = new PopupWithImage('.popup_type_image');

const handleCardClick = (link, alt, name) => {
  popupImage.open(link, alt, name);
};

function callPopupProfile(evt) {
  popupProfile.setInputValues(user1.getUserInfo());
  formControllers['popup-profile'].checkFormForErrors();
  popupProfile.open();
}

function callPopupCard(evt) {
  /*   popupCard.resetForm();
      formControllers['popup-card'].disableButton();
      formControllers['popup-card'].clearValidationErrors(); */
  popupCard.open();
}

initialCards.forEach((card) => {
  const cardElement = createCard(card.name, card.link);
  cardList.push(cardElement);
});

cardSection.renderItems();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
enableValidationForms(validationOptions);
buttonEdit.addEventListener('click', callPopupProfile);
buttonNewPlace.addEventListener('click', callPopupCard);



