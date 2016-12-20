import {API_ENDPOINT} from 'constants';
import {dispatch} from 'common';

export
const fetchHotels = () =>
  fetch(`${API_ENDPOINT}/hotels`).
    then(res => res.json()).
    then(data => dispatch({type: 'addHotels', data})).
    catch(console.error);