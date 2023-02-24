const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');
const popupView = document.querySelector('.popup');
const popupWrapper = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');
const templateImage = document.getElementById('popup-image');
const templateForm = document.getElementById('popup-form');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function callPopup(evt) {
  if (evt.target.classList.contains('card__photo')) {
    const newItemElement = templateImage.content.cloneNode(true);
    const newItemImage = newItemElement.querySelector('.popup__image');
    newItemImage.src = evt.target.src;
    newItemImage.alt = evt.target.alt;
    const newItemDescription = newItemElement.querySelector('.popup__description');
    const cardParentCall = evt.target.closest('.card');
    const descriptionCardParentCall = cardParentCall.querySelector('.card__description');
    newItemDescription.textContent = descriptionCardParentCall.textContent;
    const buttonClose = newItemElement.querySelector('.popup__button-close');
    buttonClose.addEventListener('click', closePopup);
    popupWrapper.prepend(newItemElement);
  }
  else {
    const newItemElement = templateForm.content.cloneNode(true);
    const popupHeader = newItemElement.querySelector('.popup__header');
    const popupName = newItemElement.querySelector('.popup__input_type_name');
    const popupDescription = newItemElement.querySelector('.popup__input_type_description');
    const popupButtonText = newItemElement.querySelector('.popup__button-save');
    const buttonClose = newItemElement.querySelector('.popup__button-close');
    buttonClose.addEventListener('click', closePopup);
    if (evt.target.classList.contains('profile__button-edit')) {
      popupHeader.textContent = 'Редактировать профиль';
      popupName.value = profileName.textContent;
      popupName.placeholder = 'Имя'
      popupDescription.value = profileDescription.textContent;
      popupDescription.placeholder = 'О себе';
      popupButtonText.textContent = 'Сохранить';
    } else {
      popupHeader.textContent = 'Новое место';
      popupName.value = '';
      popupName.placeholder = 'Название';
      popupDescription.value = '';
      popupDescription.placeholder = 'Ссылка на картинку';
      popupButtonText.textContent = 'Создать';
    }
    popupWrapper.prepend(newItemElement);
    const formChangeProfile = document.forms['popup-profile'];
    formChangeProfile.addEventListener('submit', savePopup);
  }
  popupView.classList.add('popup_opened');
}

function closePopup(e) {
  let popup = e.target.closest('.popup__container');
  if (popup === null) {
    popup = e.target.closest('.popup__container-image');
  }
  popupView.classList.remove('popup_opened');
  setTimeout(removePopup, 600, popup);
}

function removePopup(popup) {
  popup.remove();
}

function savePopup(evt) {
  evt.preventDefault();
  const popupName = document.querySelector('.popup__input_type_name');
  const popupDescription = document.querySelector('.popup__input_type_description');
  const popupButtonClose = document.querySelector('.popup__button-close');
  if (popupName.placeholder === 'Имя') {
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
  }
  else {
    const cardRecordable = { name: popupName.value, link: popupDescription.value };
    renderItem(itemListWrapper, cardRecordable);
  }
  popupButtonClose.click();
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
  const like = newItemElement.querySelector('.card__button-like');
  like.addEventListener('click', clickLike);
  const trash = newItemElement.querySelector('.card__button-remove');
  trash.addEventListener('click', removeCard);
  const imageCard = newItemElement.querySelector('.card__photo');
  imageCard.addEventListener('click', callPopup);
  return newItemElement;
}

const renderItem = (wrap, card) => {
  wrap.prepend(getItemElement(card))
}


initialCards.forEach((card) => {
  renderItem(itemListWrapper, card)
})
buttonEdit.addEventListener('click', callPopup);
buttonNewPlace.addEventListener('click', callPopup);

