import { callPopupImage } from "./popups.js";

class Card {
  constructor(name, link, selectorTemplateElement) {
    this._name = name;
    this._link = link;
    this._selectorTemplateElement = selectorTemplateElement;
  }

  renderItem = (wrap) => {
    wrap.prepend(this._getItemElement())
  }

  _setEventListenerClickImage = () => {
    this._itemImage.addEventListener('click', callPopupImage);
  }

  _setEventListenerClickLike = () => {
    this._like.addEventListener('click', this._clickLike);
  }

  _setEventListenerClickTrash = () => {
    this._trash.addEventListener('click', this._removeCard);
  }

  _getItemElement = () => {
    this._element = this._selectorTemplateElement.content.cloneNode(true).children[0];
    this._itemTitle = this._element.querySelector('.card__name');
    this._itemTitle.textContent = this._name;
    this._itemImage = this._element.querySelector('.card__photo');
    this._itemImage.src = this._link;
    this._itemImage.alt = `Фото ${this._name}`;
    this._setEventListenerClickImage();
    this._like = this._element.querySelector('.card__button-like');
    this._setEventListenerClickLike();
    this._trash = this._element.querySelector('.card__button-remove');
    this._setEventListenerClickTrash();
    return this._element;
  }

  _clickLike = () => {
    this._like.classList.toggle('card__button-like_active');
  }

  _removeCard = () => {
    this._element.remove();
  }
}

export default Card;
