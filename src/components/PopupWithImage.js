import Popup from './Popup.js'

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._element.querySelector('.popup__image');
    this._imageDescription = this._element.querySelector('.popup__description');
  }

  open(imageSrc, imageAlt, cardTitle) {
    this._image.src = imageSrc;
    this._image.alt = imageAlt;
    this._imageDescription.textContent = cardTitle;
    super.open();
  }
}

