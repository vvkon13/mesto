import { arrayFormControllers } from "./validate.js";
import Card from './card.js';

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
  const cardElement = new Card(popupCardTitle.value, popupCardLink.value, templateCard);
  cardElement.renderItem(itemListWrapper);
  closePopup(popupCardWrapper);
}

function closePopup(popup) {
  document.removeEventListener('keydown', handlerСlosePopupIfKeyEscape);
  popup.classList.remove('popup_opened');
}

export { closePopup, callPopupProfile, callPopupCard, savePopupProfile, savePopupCard, formPopupProfile, formPopupCard, itemListWrapper, templateCard, callPopupImage }
