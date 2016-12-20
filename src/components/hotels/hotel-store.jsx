import {ReduceStore} from 'flux/utils';
import {HotelModel} from './hotel-model';
import Immutable from 'immutable';
import {AppDispatcher} from 'common';
import {dispatch} from 'common';
import {fetchHotels} from './hotel-service';

class HotelStore extends ReduceStore {
  getInitialState() {
     return Immutable.OrderedMap();
  }

  reduce (state, action) {
    switch (action.type) {
      case 'addHotel':
        return addItem(state, action.data);

      case 'addHotels':
        return addItems(state, action.data);

      case 'removeHotel':
        return state;

      case 'fetchHotels':
        fetchHotels();
        return state;

      default:
        return state;
    }
  }

  getHotel () {
    return this.getState().find(h => id);
  }
}

const addItem = (state, data) => {
  const instance = new HotelModel(data);
  return state.set(instance.id, instance);
}

const addItems = (state, data) =>
  data.reduce((st, item) => addItem(st, item), state);

const instance = new HotelStore(AppDispatcher);
export default instance;