import { render, RenderPosition } from '../render.js';
import SortView from '../view/sort-view.js';
import FormCreation from '../view/form-creation.js';
import TripPoint from '../view/trip-point.js';
import TripPointsList from '../view/trip-points-list.js';

export default class TripPresenter {
  tripPointsListComponent = new TripPointsList();

  constructor({ tripContainer }) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(new SortView(), this.tripContainer, RenderPosition.AFTERBEGIN);
    render(new FormCreation(), this.tripContainer);
    render(this.tripPointsListComponent, this.tripContainer);

    for (let i = 0; i < 3; i++) {
      render(new TripPoint(), this.tripPointsListComponent.getElement());
    }
  }
}
