function showInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
    const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(errorClass);
}

function hideInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
    const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(errorClass);
}


function checkInputValid(formElement, inputElement, options) {
    if (!inputElement.validity.valid) {
        return showInputError(formElement, inputElement, options);
    } 
        hideInputError(formElement, inputElement, options);    
};

function hasInvalidInput(inputList) {
    return !inputList.every((inputElement) => inputElement.validity.valid)
}

function toggleButtonState(inputElements, submitButton, {inactiveButtonClass}) {
    let invalidInput = false;

    inputElements.forEach(inputElement => {
        if(!inputElement.validity.valid) {
            invalidInput = true;
        }
    });

    if(hasInvalidInput(inputElements)) {
        submitButton.classList.add(inactiveButtonClass);
        submitButton.disabled = true;
        return;
    } 
        submitButton.classList.remove(inactiveButtonClass);
        submitButton.disabled = false;    
}

function setEventListeners(formElement, options) {
    const {inputSelector} = options;
    const inputElements = [...formElement.querySelectorAll(inputSelector)];
    const submitButton = formElement.querySelector(".modal__button");
    

    inputElements.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValid(formElement, inputElement, options);
            toggleButtonState(inputElements, submitButton, options);
        });
        
    });
}

function enableValidation(options) {
    //[...] spread operator, grabs an Array or Array like object (Same as Array.from)
    const formElements = [...document.querySelectorAll(options.formSelector)];
        formElements.forEach((formElement) => {
            formElement.addEventListener("submit", (evt) => {
                //look in my index.js file to make sure that it is not redundant
                evt.preventDefault();
            });

            setEventListeners(formElement, options);
                                                    
        });
}

const config = ({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
});

enableValidation(config);

// still need to reset error messages
//add function and class to disableButton
//add function and class to enableButton