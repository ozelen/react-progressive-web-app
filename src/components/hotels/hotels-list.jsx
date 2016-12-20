import React, {Component} from 'react';
import {HotelsListItem} from './hotels-list-item';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Container} from 'flux/utils';
import HotelStore from './hotel-store';
import {dispatch} from 'common';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router';

const fltBtnStyle = {
  position: 'fixed',
  bottom: 20,
  right: 20
};

export
class HotelsListComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hotels: []
    };
  }

  static calculateState () {
    return {
      hotels: HotelStore.getState().toArray()
    };
  }

  static getStores () {
    return [HotelStore];
  }

  componentDidMount () {
    dispatch({type: 'hotelService', operation: 'list'});
  }

  render () {
    return (
      <div>
        <List>
        <Subheader>Hotels</Subheader>
        {this.state.hotels.map(hotel =>
          <HotelsListItem {...hotel.toJS()} key={hotel._id} />
        )}
        </List>
        <FloatingActionButton secondary={true} style={fltBtnStyle}
          containerElement={<Link to={`/hotels/add/`} />}>
          <ContentAdd/>
        </FloatingActionButton>
      </div>
    );
  }
}

export
const HotelsList = Container.create(HotelsListComponent);
