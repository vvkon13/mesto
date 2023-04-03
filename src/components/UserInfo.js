export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
  }

  getUserInfo() {
    const user = { name: this._profileName.textContent, description: this._profileDescription.textContent };
    return user;
  }

  setUserInfo({ name, description }) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }
}
