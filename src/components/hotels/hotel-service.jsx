import {API_ENDPOINT} from 'constants';
import {dispatch} from 'common';

export
const service = ({operation, data}) => ({
  list, details, create //, update, destroy
}[operation] || noop(operation))(data);

export
const list = () =>
  fetch(`${API_ENDPOINT}/hotels`).
    then(res => res.json()).
    then(data => dispatch({type: 'addHotels', data})).
    catch(console.error);

export
const details = ({hotelId}) =>
  fetch(`${API_ENDPOINT}/hotels/${hotelId}`).
    then(res => res.json()).
    then(data => dispatch({type: 'addHotel', data})).
    catch(console.error);

export
const modify = method => data =>
  fetch(`${API_ENDPOINT}/hotels`, {
    mode: 'cors', method, headers,
    body: JSON.stringify(data)
  }).then(res => res.json());

export const create = modify('post');

export const update = modify('put');

const noop = op => data =>
  console.error(`Operation ${op} does not exist`, data);

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};