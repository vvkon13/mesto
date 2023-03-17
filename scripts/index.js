import Card from './card.js';
import { initialCards } from './cards.js';
import { validationOptions, enableValidationForms } from './validate.js';
import { closePopup, callPopupProfile, callPopupCard, savePopupProfile, savePopupCard, formPopupProfile, formPopupCard, templateCard, itemListWrapper } from './popups.js'


const popups = document.querySelectorAll('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');

initialCards.forEach((card) => {
  const cardElement = new Card(card.name, card.link, templateCard);
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
