import React, {Component} from 'react';
import {HotelsList} from './hotels';
import {Link} from 'react-router';

export
class AppLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hotel Booking App</h1>
          <Link to='/'>Home</Link>
          |
          <Link to='/about'>About</Link>
          |
          <Link to='/contacts'>Contacts</Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}