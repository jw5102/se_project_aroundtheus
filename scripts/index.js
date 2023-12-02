const initialCards = [
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

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers
const cardListElement = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#card-add-modal");
const previewImageModal = document.querySelector("#modal__card-preview");
const previewImageContainer = document.querySelector("#modal-preview-container");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");
const previewImageElement = document.querySelector(".modal__image-preview");
const previewCaptionElement = document.querySelector(".modal__caption-preview");


// Buttons and Other DOM Nodes
const profileEditOpen = document.querySelector("#profile-edit-button");
const profileEditClose = profileEditModal.querySelector("#profile-edit-close-button");
const profileName = document.querySelector("#profile__name");
const profileDescription = document.querySelector("#profile__description");
const addNewCardButton = document.querySelector("#profile-add-button");
const addNewCardClose = addCardModal.querySelector("#card-add-close-button");
const previewCloseButton = document.querySelector("#modal-preview-close-button");

// Form Data
const profileNameInput = profileEditForm.querySelector("#profile-name-input");
const profileDescriptionInput = profileEditForm.querySelector("#profile-description-input");
const cardTitleInput = addCardForm.querySelector("#title-input");
const cardLinkInput = addCardForm.querySelector("#image-link-input");

/* -------------------------------------------------------------------- */
/*                             Functions                                */
/* -------------------------------------------------------------------- */

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove() 
  });

  cardTitleElement.textContent = cardData.name;
  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;

  cardImageElement.addEventListener("click", () => {
    previewImageModal.classList.add(".modal_opened");
    previewImageElement.src = cardData.link;
    previewImageElement.alt = cardData.name;
    previewCaptionElement.textContent = cardData.name;
    openPopup(previewImageModal);
  });
  return cardElement;
}

/* -------------------------------------------------------------------- */
/*                             Event Handlers                           */
/* -------------------------------------------------------------------- */

// Edit Profile
function handleProfileEditOpen(evt) {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

// Add New Card
function handleAddNewCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  renderCard({name, link}, cardListElement);
  cardTitleInput.value = "";
  cardLinkInput.value = "";
  closePopup(addCardModal);
}

/* -------------------------------------------------------------------- */
/*                             Event Listeners                          */
/* -------------------------------------------------------------------- */

//Edit Profile
profileEditOpen.addEventListener("click", () => openPopup(profileEditModal));
profileEditOpen.addEventListener("click", handleProfileEditOpen);
profileEditClose.addEventListener("click", () => closePopup(profileEditModal));
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// Add New Card
addNewCardButton.addEventListener("click", () => openPopup(addCardModal));
addNewCardClose.addEventListener("click", () => closePopup(addCardModal));
addCardForm.addEventListener("submit", handleAddNewCardFormSubmit);

// Card Preview
previewCloseButton.addEventListener("click", () => closePopup(previewImageModal));


// Rendering Cards
initialCards.forEach((cardData) => renderCard(cardData, cardListElement));


