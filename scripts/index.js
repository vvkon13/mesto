const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const formChangeProfile = document.forms['popup-profile'];
const popupView = document.querySelector('.popup');
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

function callPopup() {
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
  popupView.classList.add('popup_opened');
}

function closePopup() {
  popupView.classList.remove('popup_opened');
}

function savePopup(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
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
  wrap.append(getItemElement(card))
}

initialCards.forEach((card) => {
  renderItem(itemListWrapper, card)
})


buttonEdit.addEventListener('click', callPopup);
buttonClose.addEventListener('click', closePopup);
formChangeProfile.addEventListener('submit', savePopup);

