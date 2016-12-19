import React, {Component} from 'react';
import {API_ENDPOINT} from 'constants';
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

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export
class HotelDetails extends Component {
  constructor (props) {
    super(props);
    this.state = {hotel: {}};
  }

  componentDidMount () {
    fetch(`${API_ENDPOINT}/hotels/${this.props.params.hotelId}`).
      then(res => res.json()).
      then(hotel => this.setState({hotel})).
      catch(console.error);
  }

  render () {
    const {_id} = this.state.hotel;
    return (
      <Tabs>
        <Tab label="Info" icon={<Info/>}
          containerElement={<Link to={`/hotels/${_id}/`} />} >

          {HotelInfo(this.state.hotel)}
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