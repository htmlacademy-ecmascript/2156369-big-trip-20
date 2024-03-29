import { createElement } from '../render.js';

function createTripPointsList() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripPointsList {
  getTemplate() {
    return createTripPointsList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
