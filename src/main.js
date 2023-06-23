import { render, RenderPosition } from './render.js';
import TripInfo from './view/trip-info.js';
import FiltersView from './view/filters-view.js';
import TripPresenter from './presenter/trip-presenter.js';

const tripMain = document.querySelector('.trip-main');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripSort = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({ tripContainer: tripSort });

render(new TripInfo(), tripMain, RenderPosition.AFTERBEGIN);
render(new FiltersView(), tripFilters);

tripPresenter.init();
