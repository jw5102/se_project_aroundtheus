export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  _setEventListeners() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._checkInputValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _showInputError(inputElement) {
    //console.log(inputElement.id);
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorMessageElement.classList.add(this._errorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.classList.remove(this._errorClass);
    errorMessageElement.textContent = "";
  }

  _checkInputValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasValidInput() {
    return this._inputElements.every((inputElement) => {
      return inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    
    if (!this._hasValidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();      
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
