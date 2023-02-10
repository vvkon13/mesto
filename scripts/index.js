let editbutton = document.querySelector('.profile__button-edit');
let closebutton = document.querySelector('.popup__button-close');
let saveclosebutton = document.querySelector('.popup__button-save');

function Callpopup() {
  let popupview = document.querySelector('.popup');
  let popupname = document.querySelector('.popup__name');
  let popup__description = document.querySelector('.popup__description');
  let profile__name = document.querySelector('.profile__name');
  let profile__description = document.querySelector('.profile__description');
  popupname.value = profile__name.textContent;
  popup__description.value = profile__description.textContent;
  popupview.className = 'popup popup_opened';
}

function Closepopup() {
  let popupview = document.querySelector('.popup');
  popupview.className = 'popup';
}

function Savepopup() {
  let popupview = document.querySelector('.popup');
  let popupname = document.querySelector('.popup__name');
  let popup__description = document.querySelector('.popup__description');
  let profile__name = document.querySelector('.profile__name');
  let profile__description = document.querySelector('.profile__description');
  profile__name.textContent = popupname.value;
  profile__description.textContent = popup__description.value;
}

function SaveAndClosePoppap() {
  Savepopup();
  Closepopup();
}


editbutton.addEventListener('click', Callpopup);
closebutton.addEventListener('click', Closepopup);
saveclosebutton.addEventListener('click', SaveAndClosePoppap);
