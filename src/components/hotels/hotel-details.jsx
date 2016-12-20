import React, {Component} from 'react';
import {HotelInfo} from './hotel-info';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Link} from 'react-router';

import Place from 'material-ui/svg-icons/maps/place';
import Photo from 'material-ui/svg-icons/editor/insert-photo';
import Room from 'material-ui/svg-icons/maps/local-hotel';
import Info from 'material-ui/svg-icons/action/info';
import Services from 'material-ui/svg-icons/places/room-service';
import Book from 'material-ui/svg-icons/action/bookmark';

import {Container} from 'flux/utils';
import {dispatch} from 'common';
import HotelStore from './hotel-store';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export
class HotelDetailsComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {hotel: {}};
  }

  static calculateState () {
    return {
      getHotel: id => HotelStore.getHotel(id)
    };
  }

  static getStores () {
    return [HotelStore];
  }

  componentDidMount () {
    dispatch({type: 'hotelService', operation: 'details',
      data: {hotelId: this.props.params.hotelId}});
  }

  render () {
    const hotel = this.state.getHotel(this.props.params.hotelId);
    const {_id} = hotel || {};

    return (
      <Tabs>
        <Tab label="Info" icon={<Info/>}
          containerElement={<Link to={`/hotels/${_id}/`} />} >

          {hotel && HotelInfo(hotel)}
        </Tab>

        <Tab label="Rooms" icon={<Room/>}>

        </Tab>

        <Tab label="Services" icon={<Services />}/>

        <Tab label="Gallery" icon={<Photo />}/>
        <Tab label="Location" icon={<Place />}/>
        <Tab label="Bookings" icon={<Book />}
             containerElement={<Link to={`/hotels/${_id}/booking`} />} />

      </Tabs>
    );
  }
}

export
const HotelDetails = Container.create(HotelDetailsComponent);