import React, {Component} from 'react';
import {HotelsListItem} from './hotels-list-item';
import {API_ENDPOINT} from 'constants';

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
        <h3>Hotels</h3>
        <ul>
          {this.state.hotels.map(hotel => <HotelsListItem {...hotel} /> )}
        </ul>
      </div>
    );
  }
}