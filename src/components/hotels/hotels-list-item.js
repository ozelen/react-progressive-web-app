import React, {Component} from 'react';
import {Link} from 'react-router';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Hotel from 'material-ui/svg-icons/maps/hotel';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {blue500, yellow600} from 'material-ui/styles/colors';

export
const HotelsListItem = ({_id, name, city, active}) =>
  <Link to={`hotels/${_id}`}>
    <ListItem
      leftAvatar={<Avatar icon={<Hotel />} backgroundColor={yellow600} />}
      rightIcon={<ActionInfo />}
      primaryText={name}
      secondaryText={city} />
  </Link>;