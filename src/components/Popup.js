export default class Popup {
    constructor({ popupSelector }) {
        this._popupElement = document.querySelector(popupSelector);
        
        // Another way for the esc key to work combined with the below if statment
        //this._handleEscapeClose = this._handleEscapeClose.bind(this); 
    }

    openModal() {
        // opens popup
        this._popupElement.classList.add("modal_opened");
        document.addEventListener("keydown", this._handleEscapeClose);
    }

    closeModal() {
        // closes popup
        this._popupElement.classList.remove("modal_opened");
        document.removeEventListener("keydown", this._handleEscapeClose);
    }

    // This method combined with the above code is another way for the esc key to function
    // _handleEscapeClose(evt) {
    //     if (evt.key === "Escape") {
    //         this.closeModal();
    //     }
    // }

    _handleEscapeClose = (evt) => {
        // listens for Escape key
        if (evt.key === "Escape") {
            this.closeModal();
        }
    };

    setEventListeners() {
        // sets event listeners
        this._popupElement.addEventListener("click", (evt) => {
            if (
              evt.target.classList.contains("modal") ||
              evt.target.classList.contains("modal__close")
            ) {
              this.closeModal();
            }
          });
    }

}