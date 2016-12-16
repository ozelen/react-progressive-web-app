import React, {Component} from 'react';
import {API_ENDPOINT} from 'constants';

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
    const {hotel} = this.state;
    return (
      <div>
        <h1>{hotel.name}</h1>
        <p>City: {hotel.type}</p>
        <p>City: {hotel.city}</p>
      </div>
    );
  }
}