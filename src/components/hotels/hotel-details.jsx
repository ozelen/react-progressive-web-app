import React, {Component} from 'react';
import {API_ENDPOINT} from 'constants';
import {HotelCard} from './card';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

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
    return (
      <Tabs>
        <Tab label="Info" icon={<Info/>}>
          {HotelCard(this.state.hotel)}
        </Tab>
        <Tab label="Rooms" icon={<Room/>}>
          <div>
            <h2 style={styles.headline}>Rooms</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
        <Tab label="Services" icon={<Services />}>
        </Tab>
        <Tab label="Gallery" icon={<Photo />}>

          <div>
            <h2 style={styles.headline}>Gallery</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
        <Tab label="Location" icon={<Place />}>
        </Tab>
        <Tab label="Bookings" icon={<Book />}>
        </Tab>
      </Tabs>
    );
  }
}