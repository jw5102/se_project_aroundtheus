export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._element = document.querySelector(containerSelector);

    }

    renderItems() {
        this._items.forEach((item) => {
          this._renderer(item);
        });
      }
      addItems(element) {
        this._element.prepend(element);
      }
}