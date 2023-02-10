let editbutton = document.querySelector('.profile__button-edit');
let closebutton = document.querySelector('.popup__button-close');
let formChangeProfile = document.forms.PopupProfile;
let popupView = document.querySelector('.popup');
let popupName = document.querySelector('.popup__input_name');
let popupDescription = document.querySelector('.popup__input_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let likesofpage = document.getElementsByClassName ('card__button-like');


function callpopup() {
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
  popupView.classList.add('popup_opened');
}

function closepopup() {
  popupView.classList.remove('popup_opened');
}

function savepopup(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closepopup();
}

function clicklike() {
  this.classList.toggle('card__button-like_active');
}


editbutton.addEventListener('click', callpopup);
closebutton.addEventListener('click', closepopup);
formChangeProfile.addEventListener('submit', savepopup);
for (let i = 0; i < likesofpage.length; ++i) {
  const button = likesofpage[i];
  button.addEventListener('click', clicklike);
}

