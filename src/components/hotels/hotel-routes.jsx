import React from 'react';
import {Router, Routes, Route} from 'react-router';
import {HotelsList} from './hotels-list';
import {HotelDetails} from './hotel-details';
import {HotelRooms} from './hotel-rooms';
import {HotelForm} from './hotel-form';

export
const HotelRoutes =
  <Route>
    <Route path='hotels' component={HotelsList}>
      <Route path='add' component={HotelForm}/>
    </Route>
    <Route path='hotels/:hotelId' component={HotelDetails}>
      <Route path='edit' component={HotelForm} />
      <Route path='rooms' component={HotelRooms} />
    </Route>
  </Route>;