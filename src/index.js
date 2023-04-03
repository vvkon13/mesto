import './pages/index.css'; // добавьте импорт главного файла стилей

import FormValidator from './components/FormValidator.js';
import { initialCards } from './scripts/arrayOfCards.js';
import Section from './components/Section.js';
import Card from './components/Card.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';

const formPopupProfile = document.querySelector('[name="popup-profile"]');
const formPopupCard = document.querySelector('[name="popup-card"]');
const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');
const arrayFormControllers = [];
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
  name: 'Жак',
  description: 'Кустов'
});

const popupProfile = new PopupWithForm('.popup_type_profile', {
  savePopup: (popupProfileValues) => {
    user1.setUserInfo({
      name: popupProfileValues['popup-name'],
      description: popupProfileValues['popup-description']
    })
    popupProfile.close();
  }
})

const popupCard = new PopupWithForm('.popup_type_card', {
  savePopup: (popupProfileValues) => {
    const cardElement = new Card(popupProfileValues['popup-card-title'], popupProfileValues['popup-card-link'], templateCard, handleCardClick, handleCardRemove);
    cardSection.addItem(cardElement.getItemElement());
    cardList.push(cardElement);
    popupCard.close();
  }
})

const popupImage = new PopupWithImage('.popup_type_image');

const handleCardClick = (link, alt, name) => {
  popupImage.open(link, alt, name)
};

const handleCardRemove = (element) => {
  const indexElementRemove = cardList.indexOf(element, 0);
  if (indexElementRemove >= 0) {
    cardList.splice(indexElementRemove, 1);
  }
}

function callPopupProfile(evt) {
  const formController = arrayFormControllers.find(item => item._formInstance === formPopupProfile);
  const userInfo = user1.getUserInfo();
  popupProfile.setInputValues(userInfo.name, userInfo.description);
  formController.checkFormForErrors();
  popupProfile.open();
}

function callPopupCard(evt) {
  popupCard.setInputValues('', '');
  // inputs - пустые деактивируем кнопку
  const formController = arrayFormControllers.find(item => item._formInstance === formPopupCard);
  formController.disableButton();
  formController.clearValidationErrors();
  popupCard.open();
}


initialCards.forEach((card) => {
  const cardElement = new Card(card.name, card.link, templateCard, handleCardClick, handleCardRemove);
  cardList.push(cardElement);
});
cardSection.renderItems();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
enableValidationForms(validationOptions);
buttonEdit.addEventListener('click', callPopupProfile);
buttonNewPlace.addEventListener('click', callPopupCard);



