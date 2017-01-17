import {Dispatcher} from 'flux';

export
const AppDispatcher = new Dispatcher();

export
const dispatch = AppDispatcher.dispatch.bind(AppDispatcher);

export
const emiter = (type, options={}) => (data={}) =>
  (dispatch({type, data:{...data, ...options}}), data);