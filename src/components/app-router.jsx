import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import {AppLayout} from './app-layout';
import {HotelsList, HotelDetails} from './hotels';
import {AboutPage, ContactsPage} from './pages';

export
class AppRouter extends Component {
  render () {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={AppLayout}>
          <IndexRedirect to='hotels'/>
          <Route path='hotels' component={HotelsList} />
          <Route path='hotels/:hotelId' component={HotelDetails} />
          <Route path='about' component={AboutPage} />
          <Route path='contacts' component={ContactsPage} />
        </Route>
      </Router>
    );
  }
}