import React from 'react';
import {Router, Routes, Route} from 'react-router';
import {HotelsList} from './hotels-list';
import {HotelDetails} from './hotel-details';
import {HotelRooms} from './hotel-rooms';

export
const HotelRoutes =
  <Route>
    <Route path='hotels' component={HotelsList}/>
    <Route path='hotels/:hotelId' component={HotelDetails}>
      <Route path='rooms' component={HotelRooms} />
    </Route>
  </Route>;