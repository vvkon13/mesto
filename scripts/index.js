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

const validationOptions = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_visually-erroneous',
  errorClass: 'popup__input-error_active'
};

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
  popupProfileName.value = profileName.textContent;
  popupProfileDescription.value = profileDescription.textContent;
  checkingErrorForm(formPopupProfile, validationOptions);
  openPopup(popupProfileWrapper);
}

function callPopupCard(evt) {
  popupCardTitle.value = '';
  popupCardLink.value = '';
  // inputs - пустые деактивируем кнопку
  const buttonElement = popupCardWrapper.querySelector(validationOptions.submitButtonSelector);
  disableButton(buttonElement, validationOptions.inactiveButtonClass);
  const formInstance = popupCardWrapper.querySelector('form');
  clearingErrorsFromScreenForm(formInstance, validationOptions);
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
  const cardRecordable = { name: popupCardTitle.value, link: popupCardLink.value };
  renderItem(itemListWrapper, cardRecordable);
  closePopup(popupCardWrapper);
}

function clickLike() {
  this.classList.toggle('card__button-like_active');
}

function removeCard(evt) {
  const card = evt.target.closest('.card');
  card.remove();
}

const getItemElement = (card) => {
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

const renderItem = (wrap, card) => {
  wrap.prepend(getItemElement(card))
}

function closePopup(popup) {
  document.removeEventListener('keydown', handlerСlosePopupIfKeyEscape);
  popup.classList.remove('popup_opened');
}


initialCards.forEach((card) => {
  renderItem(itemListWrapper, card)
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
