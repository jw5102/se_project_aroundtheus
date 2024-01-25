import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super({ popupSelector });
        this._previewImageEl = document.querySelector(".modal__image-preview");
        this._previewCaptionEl = document.querySelector(".modal__caption-preview");
    }

    openModal({ name, link }) {
        this._previewImageEl.src = link;
        this._previewImageEl.alt = link;
        this._previewCaptionEl.textContent = name;

        super.openModal();
    }
}