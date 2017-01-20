import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import {UserModel} from './user-model';

class UserStore extends ReduceStore {
  getInitialState () {
    return Immutable.OrderedMap();
  }

  reduce (state, action) {
    case 'addUser':
      return addItem(state, action.data);

    case 'addDetails':
      return state;

    case 'login':
      return state;

    case 'logout':
      return state;

    default:
      return state;
  }

  getCurrentUser () {
    return this.getState().find(u => u.logged);
  }
}