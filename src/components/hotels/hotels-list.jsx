import React, {Component} from 'react';
import {HotelsListItem} from './hotels-list-item';
import {API_ENDPOINT} from 'constants';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export
class HotelsList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hotels: []
    }
  }

  componentDidMount () {
    fetch(`${API_ENDPOINT}/hotels`).
      then(res => res.json()).
      then(hotels => this.setState({hotels})).
      catch(console.error);
  }

  render () {
    return (
      <div>
        <List>
        <Subheader>Hotels</Subheader>
        {this.state.hotels.map(hotel =>
          <HotelsListItem {...hotel} key={hotel._id} />
        )}
        </List>
      </div>
    );
  }
}