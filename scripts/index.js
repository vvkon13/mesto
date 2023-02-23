const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');
const buttonClose = document.querySelector('.popup__button-close');
const formChangeProfile = document.forms['popup-profile'];
const popupView = document.querySelector('.popup');
const popupHeader = document.querySelector('.popup__header');
const popupName = document.querySelector('.popup__input_type_name');
const popupDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const itemListWrapper = document.querySelector('.elements');
const templateCard = document.getElementById('card');
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
  if (evt.target.classList.contains('profile__button-edit')) {
    popupHeader.textContent = 'Редактировать профиль';
    popupName.value = profileName.textContent;
    popupName.placeholder = 'Имя'
    popupDescription.value = profileDescription.textContent;
    popupDescription.placeholder = 'О себе'
  }
  else {
    popupHeader.textContent = 'Новое место';
    popupName.value = '';
    popupName.placeholder = 'Название';
    popupDescription.value = '';
    popupDescription.placeholder = 'Ссылка на картинку';
  }
  popupView.classList.add('popup_opened');
}

function closePopup() {
  popupView.classList.remove('popup_opened');
}

function savePopup(evt) {
  evt.preventDefault();
  if (popupHeader.textContent === 'Редактировать профиль') {
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
  }
  else {
    let i = initialCards.length;
    let cardRecordable = {name: popupName.value, link: popupDescription.value};
    renderItem(itemListWrapper, cardRecordable);
  }
  closePopup();
}

function clickLike() {
  this.classList.toggle('card__button-like_active');
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
  return newItemElement;
}

const renderItem = (wrap, card) => {
  wrap.prepend(getItemElement(card))
}

initialCards.forEach((card) => {
  renderItem(itemListWrapper, card)
})


buttonEdit.addEventListener('click', callPopup);
buttonClose.addEventListener('click', closePopup);
buttonNewPlace.addEventListener('click', callPopup);
formChangeProfile.addEventListener('submit', savePopup);

