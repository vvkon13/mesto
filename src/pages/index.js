import './index.css';

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirmDeleteElement from '../components/PopupConfirmDeleteElement.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { templateCard, formControllers, buttonEdit, buttonNewPlace, avatarWrapper, validationOptions } from '../utils/constants.js';

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

const enableValidationForms = (options) => {
  const forms = Array.from(document.forms);
  forms.forEach((formInstance) => {
    const formController = new FormValidator(formInstance, options);
    formControllers[formInstance.name] = formController;
    formController.enableValidation();
  });
};

const cardSection = new Section(
  {
    renderer: (card) => {
      const newCard = createCard(card.name, card.link, card.likes, card._id, card.owner._id, user1.getUserId());
      cardSection.addItem(newCard);
    }
  }
  , '.elements');

Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([userData, iniCards]) => {
    user1.setUserInfo({
      profileName: userData.name,
      profileDescription: userData.about
    });
    user1.setUserPhoto(userData.avatar);
    user1.setUserId(userData._id);
    cardSection.setItems(iniCards);
    cardSection.renderItems();
  })
  .catch(() => {
    console.log('Карточки не загружены. Произошла ошибка');
    user1.setUserInfo({
      profileName: 'OOPS!!!',
      profileDescription: 'your advertisement should be here'
    });
    console.log('Информация о пользователе не загружена');
    user1.setUserId('error');
  })

const popupProfile = new PopupWithForm('.popup_type_profile', {
  savePopup: (popupProfileValues) => {
    return api.setUserInformation(popupProfileValues)
      .then(() => {
        user1.setUserInfo(popupProfileValues);
        popupProfile.close();
      });
  }
});

const createCard = (cardName, cardLink, likes, id, idOwner, idUser) => {
  const cardElement = new Card(cardName, cardLink, likes, id, idOwner, templateCard, handleCardClick, handleConfirmCardDelete, handleClickLike);
  return cardElement.getItemElement(idUser);
}

const popupConfirmDeleteCard = new PopupConfirmDeleteElement('.popup_type_card-deletion', {
  deleteCard: (cardId, card) => {
    api.deleteCard(cardId)
      .then(() => {
        card.remove();
        card = null;
        popupConfirmDeleteCard.close();
      })
      .catch(() => {
        console.log('Произошла ошибка удаления карточки на сервере');
      });
  }
})

const popupCard = new PopupWithForm('.popup_type_card', {
  savePopup: (popupProfileValues) => {
    return api.addCard(popupProfileValues['popup-card-title'], popupProfileValues['popup-card-link'])
      .then((data) => {
        cardSection.prependItem(createCard(data.name, data.link, data.likes, data._id, data.owner._id, user1.getUserId()));
        popupCard.close();
      });
  }
});

const popupImage = new PopupWithImage('.popup_type_image');

const popupUpdateAvatar = new PopupWithForm('.popup_type_update-avatar', {
  savePopup: (popupProfileValues) => {
    return api.updateAvatarUsrer(popupProfileValues['popup-avatar-link'])
      .then(() => {
        user1.setUserPhoto(popupProfileValues['popup-avatar-link']);
        popupUpdateAvatar.close();
      })
  }
});

const handleCardClick = (link, alt, name) => {
  popupImage.open(link, alt, name);
};

const handleConfirmCardDelete = (card, cardId) => {
  popupConfirmDeleteCard.open(card, cardId);
};

const handleClickLike = (currentLikesUserId, cardId) => {
  if (currentLikesUserId.includes(user1.getUserId())) {
    return api.removeLikeCard(cardId);
  }
  else return api.likeCard(cardId);
}

function callPopupProfile(evt) {
  popupProfile.setInputValues(user1.getUserInfo());
  formControllers['popup-profile'].checkFormForErrors();
  popupProfile.open();
}

function callPopupCard(evt) {
  popupCard.open();
}

function callPopupUpdateAvatar(evt) {
  popupUpdateAvatar.open();
}


popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
popupConfirmDeleteCard.setEventListeners();
popupUpdateAvatar.setEventListeners();
enableValidationForms(validationOptions);
buttonEdit.addEventListener('click', callPopupProfile);
buttonNewPlace.addEventListener('click', callPopupCard);
avatarWrapper.addEventListener('click', callPopupUpdateAvatar);



