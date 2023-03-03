const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const popupProfileWrapper = document.querySelector('.popup_type_profile');
const popupCardWrapper = document.querySelector('.popup_type_card');

// const popupHeader = document.querySelector('.popup__header');

// const popupName = document.querySelector('.popup__input_type_name');

const popupProfileName = document.querySelector('[name="popup-name"]');
const popupCardTitle = document.querySelector('[name="popup-card-title"]');

// const popupDescription = document.querySelector('.popup__input_type_description');

const popupProfileDescription = document.querySelector('[name="popup-description"]');
const popupCardLink = document.querySelector('[name="popup-card-link"]');


// const popupButtonText = document.querySelector('.popup__button-save');
// const formChangeProfile = document.forms['popup-profile'];

const popupImageWrapper = document.querySelector('.popup_type_image');
const popupImageImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__description');

const buttonCloseProfile = document.getElementById('button-close-profile');
const buttonCloseCard = document.getElementById('button-close-card');
const buttonCloseImage = document.getElementById('button-close-image');

const formPopupProfile = document.querySelector('[name="popup-profile"]');
const formPopupCard = document.querySelector('[name="popup-card"]');

const buttonSaveProfile = document.getElementById('button-save-profile');
const buttonSaveCard = document.getElementById('button-save-card');

const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');

// function callPopupProfile(evt) {
  // if (evt.target.classList.contains('card__photo')) {
    // popupImageImage.src = evt.target.src;
    // popupImageImage.alt = evt.target.alt;
    // const cardParentCall = evt.target.closest('.card');
    // const descriptionCardParentCall = cardParentCall.querySelector('.card__description');
    // popupImageDescription.textContent = descriptionCardParentCall.textContent;
    // popupImageWrapper.classList.add('popup_opened');
  // }
  // else {
    // if (evt.target.classList.contains('profile__button-edit')) {
      // popupHeader.textContent = 'Редактировать профиль';
      // popupName.value = profileName.textContent;
      // popupName.placeholder = 'Имя';
      // popupName.name = 'popup-profile-name';
      // popupDescription.value = profileDescription.textContent;
      // popupDescription.placeholder = 'О себе';
      // popupButtonText.textContent = 'Сохранить';
    // } else {
      // popupHeader.textContent = 'Новое место';
      // popupName.value = '';
      // popupName.placeholder = 'Название';
      // popupName.name = 'popup-place-title';
      // popupDescription.value = '';
      // popupDescription.placeholder = 'Ссылка на картинку';
      // popupButtonText.textContent = 'Создать';
    // }
    // popupWrapper.classList.add('popup_opened');
  // }
// }
function callPopupProfile(evt) {
  popupProfileName.value = profileName.textContent;
  popupProfileDescription.value = profileDescription.textContent;
  popupProfileWrapper.classList.add('popup_opened');
}

function callPopupCard(evt) {
  popupCardTitle.value = '';
  popupCardLink.value = '';
  popupCardWrapper.classList.add('popup_opened');
}

function callPopupImage(evt) {
  popupImageImage.src = evt.target.src;
  popupImageImage.alt = evt.target.alt;
  const cardParentCall = evt.target.closest('.card');
  const descriptionCardParentCall = cardParentCall.querySelector('.card__description');
  popupImageDescription.textContent = descriptionCardParentCall.textContent;
  popupImageWrapper.classList.add('popup_opened');
}

// function savePopup(evt) {
  // evt.preventDefault();
  // if (popupName.name === 'popup-profile-name') {
    // profileName.textContent = popupName.value;
    // profileDescription.textContent = popupDescription.value;
  // }
  // else {
    // const cardRecordable = { name: popupName.value, link: popupDescription.value };
    // renderItem(itemListWrapper, cardRecordable);
  // }
  // popupWrapper.classList.remove('popup_opened');
// }

function savePopupProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  popupProfileWrapper.classList.remove('popup_opened');
}

function savePopupCard(evt) {
  evt.preventDefault();
  const cardRecordable = { name: popupCardTitle.value, link: popupCardLink.value };
  renderItem(itemListWrapper, cardRecordable);
  popupCardWrapper.classList.remove('popup_opened');
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


initialCards.forEach((card) => {
  renderItem(itemListWrapper, card)
})

buttonEdit.addEventListener('click', callPopupProfile);
buttonNewPlace.addEventListener('click', callPopupCard);

buttonCloseProfile.addEventListener('click', () => {
  popupProfileWrapper.classList.remove('popup_opened');
});
buttonCloseCard.addEventListener('click', () => {
  popupCardWrapper.classList.remove('popup_opened');
});
buttonCloseImage.addEventListener('click', () => {
  popupImageWrapper.classList.remove('popup_opened');
});


// formChangeProfile.addEventListener('submit', savePopup);

formPopupProfile.addEventListener('submit', savePopupProfile);
formPopupCard.addEventListener('submit', savePopupCard);

