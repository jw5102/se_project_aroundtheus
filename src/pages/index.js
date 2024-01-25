import Card from "../../src/components/Card.js";
import FormValidator from "../../src/components/FormValidator.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImages.js";
import UserInfo from "../components/UserInfo.js";
import {
  addCardForm,
  addCardModal,
  addFormElement,
  addNewCardButton,
  cardListElement,
  cardLinkInput,
  cardTitleInput,
  cardSelector,
  editFormElement,
  initialCards,
  profileDescriptionInput,
  profileEditForm,
  profileEditModal,
  profileNameInput,
  profileEditOpen,
  settings,
} from "../utils/constants.js";

// Instance Class //

// Section class
const cardSection = new Section(
  {
    items: initialCards, // start with initial cards
    renderer: (cardData) => cardSection.addItems(renderCard(cardData)),
  }, // uses the data to create new cards
  ".cards__list" // refers to the selector in the Section class
);
cardSection.renderItems(); // calls the renderItems() to show cards on the page

// User Info - Edit Profile
const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileDescriptionSelector: ".profile__description",
});

// Popup with form - Edit Profile
const profileFormPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
profileFormPopup.setEventListeners();

// Add new card form
const newCardFormPopup = new PopupWithForm(
  "#card-add-modal",
  handleAddNewCardFormSubmit
);
newCardFormPopup.setEventListeners();

// Popup with image
const popupWithImage = new PopupWithImage("#modal__card-preview");
popupWithImage.setEventListeners();

/* -------------------------------------------------------------------- */
/*                             Functions                                */
/* -------------------------------------------------------------------- */

function renderCard(cardData) {
  const card = new Card(cardData, cardSelector, () =>
    handleImageClick(cardData)
  );
  return card.getView();
}

function handleProfileEditOpen(evt) {
  const info = userInfo.getUserInfo();
  profileNameInput.value = info.profileName;
  profileDescriptionInput.value = info.profileDescription;
  editFormValidator.resetValidation();
  profileFormPopup.openModal();
}

function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  editFormValidator.resetValidation();
  profileFormPopup.closeModal();
}

function handleAddNewCardFormSubmit(evt) {
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  cardSection.addItems(renderCard({ name, link }));
  addFormValidator.resetValidation();
  newCardFormPopup.closeModal();
}

/* -------------------------------------------------------------------- */
/*                             Event Handlers                           */
/* -------------------------------------------------------------------- */

// Popup With Image

const handleImageClick = (cardData) => {
  popupWithImage.openModal(cardData);
};


/* -------------------------------------------------------------------- */
/*                             Event Listeners                          */
/* -------------------------------------------------------------------- */

//Edit Profile
profileEditOpen.addEventListener("click", handleProfileEditOpen);


// Add New Card
addNewCardButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  newCardFormPopup.openModal()
});

const addFormValidator = new FormValidator(settings, addFormElement);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(settings, editFormElement);
editFormValidator.enableValidation();
