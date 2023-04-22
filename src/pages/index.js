// import './index.css';

// добавьте импорт главного файла стилей

import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../scripts/arrayOfCards.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirmDeleteElement from '../components/PopupConfirmDeleteElement.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const templateCard = document.getElementById('card');
const formControllers = {};
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonNewPlace = document.querySelector('.profile__button-add');

const validationOptions = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_visually-erroneous',
  errorClass: 'popup__input-error_active'
};

const user1 = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description',
  profilePhotoSelector: '.profile__photo'
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'fd367575-aa2a-4d14-b6f6-0479dde56c06',
    'Content-Type': 'application/json'
  }
});

api.getUserInformation()
  .then((data) => {
    user1.setUserInfo({
      profileName: data.name,
      profileDescription: data.about
    });
    user1.setUserPhoto(data.avatar);
    user1.setUserId(data._id);
  })
  .catch(() => {
    user1.setUserInfo({
      profileName: 'OOPS!!!',
      profileDescription: 'your advertisement should be here'
    });
    console.log('Информация о пользователе не загружена');
    user1.setUserId('error');
  });


const enableValidationForms = (options) => {
  const forms = Array.from(document.forms);
  forms.forEach((formInstance) => {
    const formController = new FormValidator(formInstance, options);
    formControllers[formInstance.name] = formController;
    formController.enableValidation();
  });
};

const iniCards = [];

const cardSection = new Section(
  {
    renderer: (card) => {
      const newCard = createCard(card.name, card.link, card.likes, card._id, card.owner._id, user1.getUserId());
      cardSection.addItem(newCard);
    }
  }
  , '.elements');

api.getInitialCards()
  .then((iniCards) => {
    cardSection.setItems(iniCards);
    cardSection.renderItems();
  })
  .catch(() => {
    console.log('Карточки не загружены. Произошла ошибка');
  })

const popupProfile = new PopupWithForm('.popup_type_profile', {
  savePopup: (popupProfileValues) => {
    api.setUserInformation(popupProfileValues)
      .then(() => {
        user1.setUserInfo(popupProfileValues);
        popupProfile.close();
      })
      .catch(() => {
        console.log('Произошла ошибка записи данных пользователя на сервер');
      })
  }
});

const createCard = (cardName, cardLink, likes, id, idOwner, idUser) => {
  const cardElement = new Card(cardName, cardLink, likes, id, idOwner, templateCard, handleCardClick, handleConfirmCardDelete);
  return cardElement.getItemElement(idUser);
}

const popupConfirmDeleteCard = new PopupConfirmDeleteElement('.popup_type_card-deletion', {
  deleteCard: (cardId, card) => {
    api.deleteCard(cardId)
      .then((res) => {
        if (res.ok) {
          card.remove();
          card = null;
          popupConfirmDeleteCard.close();
        }
      })
      .catch(() => {
        console.log('Произошла ошибка удаления карточки на сервере');
      });
  }
})

const popupCard = new PopupWithForm('.popup_type_card', {
  savePopup: (popupProfileValues) => {
    api.addCard(popupProfileValues['popup-card-title'], popupProfileValues['popup-card-link'])
      .then((data) => {
        cardSection.addItem(createCard(data.name, data.link, data.likes, data._id, data.owner._id, user1.getUserId()));
        popupCard.close();
      })
      .catch(() => {
        console.log('Произошла ошибка записи данных карточки на сервер');
      });
  }
});


const popupImage = new PopupWithImage('.popup_type_image');

const handleCardClick = (link, alt, name) => {
  popupImage.open(link, alt, name);
};

const handleConfirmCardDelete = (card, cardId) => {
  popupConfirmDeleteCard.open(card, cardId);
};

function callPopupProfile(evt) {
  popupProfile.setInputValues(user1.getUserInfo());
  formControllers['popup-profile'].checkFormForErrors();
  popupProfile.open();
}

function callPopupCard(evt) {
  popupCard.open();
}


popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
popupConfirmDeleteCard.setEventListeners();
enableValidationForms(validationOptions);
buttonEdit.addEventListener('click', callPopupProfile);
buttonNewPlace.addEventListener('click', callPopupCard);



