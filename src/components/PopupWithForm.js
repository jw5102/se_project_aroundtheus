import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = this._popupForm.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setInputValues(cardData) {
      this._inputs.forEach((input) => {
      input.value = cardData[input.name];
    });
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  closeModal() {
    this._popupForm.reset();
    super.closeModal(); // super calls the parent in Popup.js
  }
}

// index.js
// the anonymous function will invoke the handleFormSubmit
// "#card-add-modal" argument is the popupSelector argument
// const newCardPopup = new PopupWithForm("#card-add-modal", () => {});

// newCardPopup.open();

// newCardPopup.close();
