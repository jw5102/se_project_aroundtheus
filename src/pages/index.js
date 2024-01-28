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
  addNewCardButton,
  cardListElement,
  cardLinkInput,
  cardTitleInput,
  cardSelector,
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
    renderer: (cardData) => cardSection.addItem(renderCard(cardData)),
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

function handleProfileEditOpen() {
  const info = userInfo.getUserInfo();
  profileFormPopup.setInputValues(info);
  editFormValidator.resetValidation();
  profileFormPopup.openModal();
}

function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  profileFormPopup.closeModal();
}

function handleAddNewCardFormSubmit({ name, link }) {
  cardSection.addItem(renderCard({ name, link }));
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
  newCardFormPopup.openModal();
});

const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();
