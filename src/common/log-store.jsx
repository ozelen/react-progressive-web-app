import {ReduceStore} from 'flux/utils';
import {AppDispatcher, dispatch} from './dispatcher';

class LogStoreClass extends ReduceStore {
  getInitialState() {
     return [];
  }

  reduce (state, action) {
    switch (action.type) {
      case 'log':
        return addItem(state, action);

      default:
        return state;
    }
  }

  getLast (id) {
    return this.getState()[0];
  }
}

const addItem = (state, action) =>
  [{...action, timestamp: new Date().getTime()}].
    concat(state);

export
const LogStore = new LogStoreClass(AppDispatcher);