export const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
  
    {
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
  
    {
      name: "Bald Mountains",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
  
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
  
    {
      name: "Vanoise National Park",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
  
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
  ];
  

/* -------------------------------------------------------------------- */
/*                             Elements                                 */
/* -------------------------------------------------------------------- */

export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers
export const cardListElement = document.querySelector(".cards__list");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const addCardModal = document.querySelector("#card-add-modal");
export const previewImageModal = document.querySelector("#modal__card-preview");
export const previewImageContainer = document.querySelector(
  "#modal-preview-container"
);
export const profileEditForm = document.forms["modalEditProfile"];
export const addCardForm = document.forms["modalAddCard"];
export const previewImageElement = document.querySelector(".modal__image-preview");
export const previewCaptionElement = document.querySelector(".modal__caption-preview");

// Buttons and Other DOM Nodes
export const profileEditOpen = document.querySelector("#profile-edit-button");
export const profileEditClose = profileEditModal.querySelector(
  "#profile-edit-close-button"
);
export const profileName = document.querySelector("#profile__name");
export const profileDescription = document.querySelector("#profile__description");
export const addNewCardButton = document.querySelector("#profile-add-button");
export const closeButtons = document.querySelectorAll(".modal__close");

// Form Data
export const profileNameInput = profileEditForm.querySelector("#profile-name-input");
export const profileDescriptionInput = profileEditForm.querySelector(
  "#profile-description-input"
);
export const cardTitleInput = addCardForm.querySelector("#title-input");
export const cardLinkInput = addCardForm.querySelector("#image-link-input");
export const cardSelector = "#card-template";

// Validation
export const settings = {
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };

