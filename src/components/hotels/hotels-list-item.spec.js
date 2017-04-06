import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {HotelsListItem} from './hotels-list-item';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme();
const mountWithContext = node => mount(node, {
  context: {muiTheme},
  childContextTypes: { muiTheme: React.PropTypes.object.isRequired }
});

describe('hotels list item', () => {
  it('should render the list item', () => {
    expect(shallow(<HotelsListItem />).length).toBe(1);
  });

  it('should have link', () => {
    const element = shallow(<HotelsListItem name="Super Hotel" _id="super-hotel" />);
    expect(element.find('Link').prop('to')).toBe('hotels/super-hotel');
  });
});