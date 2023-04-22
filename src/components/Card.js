class Card {
  constructor(name, link, likes, idCard, idOwner, selectorTemplateElement, handleCardClick,handleConfirmCardDelete) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = idCard;
    this._ownerId = idOwner;
    this._selectorTemplateElement = selectorTemplateElement;
    this._handleCardClick = handleCardClick;
    this._handleConfirmCardDelete = handleConfirmCardDelete;
  }
  _setEventListenerClickImage = () => {
    this._itemImage.addEventListener('click', () => {
      this._handleCardClick(this._link, `Фото ${this._name}`, this._name);
    });
  }

  _setEventListenerClickLike = () => {
    this._like.addEventListener('click', this._likeCard);
  }

  _setEventListenerClickTrash = () => {
    this._trash.addEventListener('click', () => {
      this._handleConfirmCardDelete(this.element, this._id);
    });
  }

  getItemElement = (idUser) => {
    this.element = this._selectorTemplateElement.content.cloneNode(true).children[0];
    this._itemTitle = this.element.querySelector('.card__name');
    this._itemTitle.textContent = this._name;
    this._itemImage = this.element.querySelector('.card__photo');
    this._itemImage.src = this._link;
    this._itemImage.alt = `Фото ${this._name}`;
    this._setEventListenerClickImage();
    this._like = this.element.querySelector('.card__button-like');
    this._setEventListenerClickLike();
    this._trash = this.element.querySelector('.card__button-remove');
    if (idUser == this._ownerId) {
    this._setEventListenerClickTrash();
    }
    else {
      this._trash.classList.add('card__button-remove_hidden');
    }
    this._quantityLike = this.element.querySelector('.card__quantity-like');
    this._quantityLike.textContent = this._likes.length;
    return this.element;
  }

  getId = () => {
    return this._id;
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

