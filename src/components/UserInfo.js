export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profilePhotoSelector}) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
    this._profilePhoto = document.querySelector(profilePhotoSelector);
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileDescription: this._profileDescription.textContent
    };
  }

  setUserInfo({ profileName, profileDescription }) {
    this._profileName.textContent = profileName;
    this._profileDescription.textContent = profileDescription;
  }

  setUserId (id) {
    this._id = id;
  }

  getUserId () {
    return this._id;
  }

  setUserPhoto(profilePhotoSrc){
    this._profilePhoto.src = profilePhotoSrc;
  }

}
