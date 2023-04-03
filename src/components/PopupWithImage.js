import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  open(imageSrc, imageAlt, cardTitle) {
    this._image = this._element.querySelector('.popup__image');
    this._image.src = imageSrc;
    this._image.alt = imageAlt;
    this._imageDescription = this._element.querySelector('.popup__description');
    this._imageDescription.textContent = cardTitle;
    super.open();
  }
}

