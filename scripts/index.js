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

const popupImageWrapper = document.querySelector('.popup_type_image');
const popupImageImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__description');

const buttonCloseProfile = document.getElementById('button-close-profile');
const buttonCloseCard = document.getElementById('button-close-card');
const buttonCloseImage = document.getElementById('button-close-image');

const formPopupProfile = document.querySelector('[name="popup-profile"]');
const formPopupCard = document.querySelector('[name="popup-card"]');

const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');

const validationOptions = {
  form: {},
  submitSelector: '.popup__button-save',
  inputSelector: '.popup__input',
  inputSelectorClass: 'popup__input_visually-erroneous',
  inputErrorSelector: '.popup__input-error',
  inputErrorClass: 'popup__input-error_active',
  disabledButtonClass: 'popup__button-save_inactive',
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function callPopupProfile(evt) {
  popupProfileName.value = profileName.textContent;
  popupProfileDescription.value = profileDescription.textContent;
  validationOptions.form = formPopupProfile;
  enableValidation(validationOptions);
  openPopup(popupProfileWrapper);
}

function callPopupCard(evt) {
  popupCardTitle.value = '';
  popupCardLink.value = '';
  validationOptions.form = formPopupCard;
  enableValidation(validationOptions);
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
  popup.classList.remove('popup_opened');
  disableValidation(validationOptions);
}

initialCards.forEach((card) => {
  renderItem(itemListWrapper, card)
});

buttonEdit.addEventListener('click', callPopupProfile);
buttonNewPlace.addEventListener('click', callPopupCard);
buttonCloseProfile.addEventListener('click', closePopup.bind(this, popupProfileWrapper));
buttonCloseCard.addEventListener('click', closePopup.bind(this, popupCardWrapper));
buttonCloseImage.addEventListener('click', closePopup.bind(this, popupImageWrapper));
formPopupProfile.addEventListener('submit', savePopupProfile);
formPopupCard.addEventListener('submit', savePopupCard);

