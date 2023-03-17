import Card from './Card.js';

const popupProfileWrapper = document.querySelector('.popup_type_profile');
const popupCardWrapper = document.querySelector('.popup_type_card');

const popupProfileName = document.querySelector('[name="popup-name"]');
const popupCardTitle = document.querySelector('[name="popup-card-title"]');
const popupProfileDescription = document.querySelector('[name="popup-description"]');
const popupCardLink = document.querySelector('[name="popup-card-link"]');

const popupImageWrapper = document.querySelector('.popup_type_image');
const popupImageImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__description');

const formPopupProfile = document.querySelector('[name="popup-profile"]');
const formPopupCard = document.querySelector('[name="popup-card"]');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');

const arrayFormControllers = [];

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
  formController.checkFormForErrors();
  openPopup(popupProfileWrapper);
}

function callPopupCard(evt) {
  popupCardTitle.value = '';
  popupCardLink.value = '';
  // inputs - пустые деактивируем кнопку
  const formController = arrayFormControllers.find(item => item._formInstance === formPopupCard);
  formController.disableButton();
  formController.clearValidationErrors();
  openPopup(popupCardWrapper);
}

function callPopupImage(imageSrc, imageAlt, cardTitle) {
  popupImageImage.src = imageSrc;
  popupImageImage.alt = imageAlt;
  popupImageDescription.textContent = cardTitle;
  openPopup(popupImageWrapper);
}

function savePopupProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  closePopup(popupProfileWrapper);
}

const generateCard = (cardTitle, cardLink) => {
  const cardElement = new Card(cardTitle, cardLink, templateCard);
  renderItem(itemListWrapper, cardElement.getItemElement());
}

function savePopupCard(evt) {
  evt.preventDefault();
  generateCard(popupCardTitle.value, popupCardLink.value);
  closePopup(popupCardWrapper);
}

function closePopup(popup) {
  document.removeEventListener('keydown', handlerСlosePopupIfKeyEscape);
  popup.classList.remove('popup_opened');
}

const renderItem = (wrap, cardElement) => {
  wrap.prepend(cardElement);
};


export { closePopup, callPopupProfile, callPopupCard, savePopupProfile, savePopupCard, formPopupProfile, formPopupCard, callPopupImage, arrayFormControllers, generateCard }
