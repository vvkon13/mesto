let editbutton = document.querySelector('.profile__button-edit');
let closebutton = document.querySelector('.popup__button-close');
let formChangeProfile = document.forms['popup-profile'];
let popupView = document.querySelector('.popup');
let popupName = document.querySelector('.popup__input_type_name');
let popupDescription = document.querySelector('.popup__input_type_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
// let likesofpage = document.getElementsByClassName('card__button-like');


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

/* function clickLike() {
  this.classList.toggle('card__button-like_active');
}
 */

editbutton.addEventListener('click', callPopup);
closebutton.addEventListener('click', closePopup);
formChangeProfile.addEventListener('submit', savePopup);
/* for (let i = 0; i < likesofpage.length; ++i) {
  const button = likesofpage[i];
  button.addEventListener('click', clickLike);
}
 */
