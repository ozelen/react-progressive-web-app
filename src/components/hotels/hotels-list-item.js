import React, {Component} from 'react';
import {Link} from 'react-router';

export
class HotelsListItem extends Component {
  render () {
    return (
      <li>
        <Link to={`hotels/${this.props._id}`}>{this.props.name}</Link>
      </li>
    );
  }
}