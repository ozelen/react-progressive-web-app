import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {HotelsList} from './hotels-list';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fetchMock from 'fetch-mock';
import {dispatch} from 'common';


const muiTheme = getMuiTheme();
const mountWithContext = node => mount(node, {
  context: {muiTheme},
  childContextTypes: { muiTheme: React.PropTypes.object.isRequired }
});

describe('hotels list', () => {
  afterEach(() => {
    dispatch({type:'hotelsReset'});
  });

  it('should mount', () => {
    // fetchMock.get('*', {hello: 'world'});
    fetchMock.get('http://0.0.0.0:10010/hotels', [
      {_id:1, name: 'Hotel 1', type: 'hotel', city: 'Lviv'},
      {_id:2, name: 'Hotel 2', type: 'hotel', city: 'Lviv'},
      {_id:3, name: 'Hotel 3', type: 'hotel', city: 'Lviv'},
      {_id:4, name: 'Hotel 4', type: 'hotel', city: 'Lviv'},
      {_id:5, name: 'Hotel 5', type: 'hotel', city: 'Lviv'},
    ]);

    const mounted = mountWithContext(<HotelsList />);

    setTimeout(() => {
      mounted.update();
      expect(mounted.find('HotelsListItem').length).toBe(5);
    }, 10);

  });
});