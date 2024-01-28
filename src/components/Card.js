export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", this._handleLikeIcon);
    
    this._deleteBtn.addEventListener("click", this._handleDeleteCard);

    this._cardPreviewElement.addEventListener("click", () => {
      this._handleImageClick(this);
      });
    }
  
  _handleLikeIcon = () => {
   this._likeBtn.classList.toggle("card__like-button_is-active");
  }

  _handleDeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getTemplate() {
      return document
      .querySelector(this._cardSelector).content
      .querySelector(".card")
      .cloneNode(true);

   };

  getView() {
    this._cardElement = this._getTemplate();
       
    this._likeBtn = this._cardElement.querySelector(".card__like-button");
    this._deleteBtn = this._cardElement.querySelector(".card__delete-button");
    this._cardPreviewElement = this._cardElement.querySelector(".card__image");
    this._cardTitleElement = this._cardElement.querySelector(".card__title");

    this._cardTitleElement.textContent = this._name;
    this._cardPreviewElement.src = this._link;
    this._cardPreviewElement.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
