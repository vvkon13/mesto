class Card {
  constructor(name, link, likes, idCard, idOwner, selectorTemplateElement, handleCardClick, handleConfirmCardDelete, handleClickLike) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = idCard;
    this._ownerId = idOwner;
    this._selectorTemplateElement = selectorTemplateElement;
    this._handleCardClick = handleCardClick;
    this._handleConfirmCardDelete = handleConfirmCardDelete;
    this._handleClickLike = handleClickLike;
  }
  _setEventListenerClickImage = () => {
    this._itemImage.addEventListener('click', () => {
      this._handleCardClick(this._link, `Фото ${this._name}`, this._name);
    });
  }

  _setEventListenerClickLike = () => {
    this._like.addEventListener('click', () => {
      this._handleClickLike(this._likesId, this._id)
        .then(data => {
          this._likes = data.likes;
          this._likesId = this._likes.map((element) => { return element._id });
          this._setLikes();
        })
        .catch(() => {
          console.log('Произошла ошибка изменения статуса Лайка');
        });
    });
  }

  _setEventListenerClickTrash = () => {
    this._trash.addEventListener('click', () => {
      this._handleConfirmCardDelete(this.element, this._id);
    });
  }

  _installEventListeners = (idUser) => {
    this._setEventListenerClickImage();
    this._setEventListenerClickLike();
    if (idUser == this._ownerId) {
      this._setEventListenerClickTrash();
    }
    else {
      this._trash.classList.add('card__button-remove_hidden');
    }
  }

  getItemElement = (idUser) => {
    this.element = this._selectorTemplateElement.content.cloneNode(true).children[0];
    this._itemTitle = this.element.querySelector('.card__name');
    this._itemTitle.textContent = this._name;
    this._itemImage = this.element.querySelector('.card__photo');
    this._itemImage.src = this._link;
    this._itemImage.alt = `Фото ${this._name}`;
    this._like = this.element.querySelector('.card__button-like');
    this._trash = this.element.querySelector('.card__button-remove');
    this._quantityLike = this.element.querySelector('.card__quantity-like');
    this._quantityLike.textContent = this._likes.length;
    this._likesId = this._likes.map((element) => { return element._id });
    if (this._likesId.includes(idUser)) {
      this._likeCard();
    };
    this._installEventListeners(idUser);
    return this.element;
  }

  getCard = () => {
    return this;
  }

  getId = () => {
    return this._id;
  }

  _setLikes = () => {
    this._quantityLike.textContent = this._likes.length;
    this._likeCard();
  }

  _likeCard = () => {
    this._like.classList.toggle('card__button-like_active');
  }

  _removeCard = () => {
    this.element.remove();
    this.element = null;
  }
}

export default Card;

