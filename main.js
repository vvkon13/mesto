(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var i=n((function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"enableValidation",(function(){o._submitElement=o._formInstance.querySelector(o._options.submitButtonSelector),o._inputs=Array.from(o._formInstance.querySelectorAll(o._options.inputSelector)),o._inputs.forEach((function(e){e.addEventListener("input",(function(){o._toggleInputStatus(e),o._toggleButtonStatus()}))})),o._toggleButtonStatus(),o._formInstance.addEventListener("reset",(function(){o.disableButton(),o.clearValidationErrors()}))})),r(this,"_toggleButtonStatus",(function(){o._inputs.every((function(e){return e.validity.valid}))?o.enableButton():o.disableButton()})),r(this,"disableButton",(function(){o._submitElement.setAttribute("disabled","on"),o._submitElement.classList.add(o._options.inactiveButtonClass)})),r(this,"enableButton",(function(){o._submitElement.removeAttribute("disabled"),o._submitElement.classList.remove(o._options.inactiveButtonClass)})),r(this,"_toggleInputStatus",(function(e){var t=o._formInstance.querySelector("#".concat(e.id,"-error"));e.validity.valid?o._hideInputErrorStatus(e,t):o._showInputErrorStatus(e,t)})),r(this,"_showInputErrorStatus",(function(e,t){t.textContent=e.validationMessage,e.classList.add(o._options.inputErrorClass),t.classList.add(o._options.errorClass)})),r(this,"_hideInputErrorStatus",(function(e,t){t.textContent="",e.classList.remove(o._options.inputErrorClass),t.classList.remove(o._options.errorClass)})),r(this,"checkFormForErrors",(function(){o._inputs.forEach((function(e){o._toggleInputStatus(e)})),o._toggleButtonStatus()})),r(this,"clearValidationErrors",(function(){o._inputs.forEach((function(e){var t=o._formInstance.querySelector("#".concat(e.id,"-error"));o._hideInputErrorStatus(e,t)}))})),this._formInstance=t,this._options=n}));const u=i;function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItems",value:function(e){this._items=e}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}var d=p((function e(t,n,r,o,i,u,c,a,l){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_setEventListenerClickImage",(function(){s._itemImage.addEventListener("click",(function(){s._handleCardClick(s._link,"Фото ".concat(s._name),s._name)}))})),y(this,"_setEventListenerClickLike",(function(){s._like.addEventListener("click",(function(){s._handleClickLike(s._likesId,s._id).then((function(e){s._likes=e.likes,s._likesId=s._likes.map((function(e){return e._id})),s._setLikes()})).catch((function(){console.log("Произошла ошибка изменения статуса Лайка")}))}))})),y(this,"_setEventListenerClickTrash",(function(){s._trash.addEventListener("click",(function(){s._handleConfirmCardDelete(s.element,s._id)}))})),y(this,"_installEventListeners",(function(e){s._setEventListenerClickImage(),s._setEventListenerClickLike(),e==s._ownerId?s._setEventListenerClickTrash():s._trash.classList.add("card__button-remove_hidden")})),y(this,"getItemElement",(function(e){return s.element=s._selectorTemplateElement.content.cloneNode(!0).children[0],s._itemTitle=s.element.querySelector(".card__name"),s._itemTitle.textContent=s._name,s._itemImage=s.element.querySelector(".card__photo"),s._itemImage.src=s._link,s._itemImage.alt="Фото ".concat(s._name),s._like=s.element.querySelector(".card__button-like"),s._trash=s.element.querySelector(".card__button-remove"),s._quantityLike=s.element.querySelector(".card__quantity-like"),s._quantityLike.textContent=s._likes.length,s._likesId=s._likes.map((function(e){return e._id})),s._likesId.includes(e)&&s._likeCard(),s._installEventListeners(e),s.element})),y(this,"getCard",(function(){return s})),y(this,"getId",(function(){return s._id})),y(this,"_setLikes",(function(){s._quantityLike.textContent=s._likes.length,s._likeCard()})),y(this,"_likeCard",(function(){s._like.classList.toggle("card__button-like_active")})),y(this,"_removeCard",(function(){s.element.remove(),s.element=null})),this._name=t,this._link=n,this._likes=r,this._id=o,this._ownerId=i,this._selectorTemplateElement=u,this._handleCardClick=c,this._handleConfirmCardDelete=a,this._handleClickLike=l}));const h=d;function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function _(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===b(t)?t:String(t)}var g=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=_(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._element=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._element.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.savePopup;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._element.querySelector("form"),n._inputList=n._element.querySelectorAll(".popup__input"),n._submitButton=n._element.querySelector(".popup__button-save"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){e[t.name]&&(t.value=e[t.name])}))}},{key:"resetForm",value:function(){this._form.reset()}},{key:"close",value:function(){this._form.reset(),w(P(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;w(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._submitButton.textContent;e._submitButton.textContent="Сохранение...",e._handleFormSubmit(e._getInputValues()).finally((function(){e._submitButton.textContent=n})).catch((function(){console.log("Произошла ошибка записи формы на сервер")}))}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._element.querySelector(".popup__image"),t._imageDescription=t._element.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e,t,n){this._image.src=e,this._image.alt=t,this._imageDescription.textContent=n,I(T(u.prototype),"open",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.deleteCard;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._element.querySelector("form"),n}return t=u,(n=[{key:"getCardDeleted",value:function(){return this._cardDeleted}},{key:"getCardIdtDeleted",value:function(){return this._cardIdDeleted}},{key:"open",value:function(e,t){this._cardDeleted=e,this._cardIdDeleted=t,q(x(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;q(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e.getCardIdtDeleted(),e.getCardDeleted())}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var F=function(){function e(t){var n=t.profileNameSelector,r=t.profileDescriptionSelector,o=t.profilePhotoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r),this._profilePhoto=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{profileName:this._profileName.textContent,profileDescription:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.profileName,n=e.profileDescription;this._profileName.textContent=t,this._profileDescription.textContent=n}},{key:"setUserId",value:function(e){this._id=e}},{key:"getUserId",value:function(){return this._id}},{key:"setUserPhoto",value:function(e){this._profilePhoto.src=e}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H(r.key),r)}}function H(e){var t=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===J(t)?t:String(t)}var M=function(){function e(t){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){return e.ok?e.json():Promise.reject("Error")},(r=H(r="_checkResponse"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInformation",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards "),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"setUserInformation",value:function(e){var t=e.profileName,n=e.profileDescription;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers})}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"removeLikeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"updateAvatarUsrer",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar "),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})})}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const z=M;var $=document.getElementById("card"),K={},Q=document.querySelector(".profile__button-edit"),W=document.querySelector(".profile__button-add"),X=document.querySelector(".profile__photo-wrapper");function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new F({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description",profilePhotoSelector:".profile__photo"}),ee=new z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"fd367575-aa2a-4d14-b6f6-0479dde56c06","Content-Type":"application/json"}}),te=new l({renderer:function(e){var t=oe(e.name,e.link,e.likes,e._id,e.owner._id,Z.getUserId());te.addItem(t)}},".elements");Promise.all([ee.getUserInformation(),ee.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo({profileName:o.name,profileDescription:o.about}),Z.setUserPhoto(o.avatar),Z.setUserId(o._id),te.setItems(i),te.renderItems()})).catch((function(){console.log("Карточки не загружены. Произошла ошибка"),Z.setUserInfo({profileName:"OOPS!!!",profileDescription:"your advertisement should be here"}),console.log("Информация о пользователе не загружена"),Z.setUserId("error")}));var ne,re=new O(".popup_type_profile",{savePopup:function(e){return ee.setUserInformation(e).then((function(){Z.setUserInfo(e),re.close()}))}}),oe=function(e,t,n,r,o,i){return new h(e,t,n,r,o,$,le,se,fe).getItemElement(i)},ie=new A(".popup_type_card-deletion",{deleteCard:function(e,t){ee.deleteCard(e).then((function(e){e.ok&&(t.remove(),t=null,ie.close())})).catch((function(){console.log("Произошла ошибка удаления карточки на сервере")}))}}),ue=new O(".popup_type_card",{savePopup:function(e){return ee.addCard(e["popup-card-title"],e["popup-card-link"]).then((function(e){te.prependItem(oe(e.name,e.link,e.likes,e._id,e.owner._id,Z.getUserId())),ue.close()}))}}),ce=new U(".popup_type_image"),ae=new O(".popup_type_update-avatar",{savePopup:function(e){return ee.updateAvatarUsrer(e["popup-avatar-link"]).then((function(t){t.ok&&(Z.setUserPhoto(e["popup-avatar-link"]),ae.close())}))}}),le=function(e,t,n){ce.open(e,t,n)},se=function(e,t){ie.open(e,t)},fe=function(e,t){return e.includes(Z.getUserId())?ee.removeLikeCard(t):ee.likeCard(t)};re.setEventListeners(),ue.setEventListeners(),ce.setEventListeners(),ie.setEventListeners(),ae.setEventListeners(),ne={inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input_visually-erroneous",errorClass:"popup__input-error_active"},Array.from(document.forms).forEach((function(e){var t=new u(e,ne);K[e.name]=t,t.enableValidation()})),Q.addEventListener("click",(function(e){re.setInputValues(Z.getUserInfo()),K["popup-profile"].checkFormForErrors(),re.open()})),W.addEventListener("click",(function(e){ue.open()})),X.addEventListener("click",(function(e){ae.open()}))})();