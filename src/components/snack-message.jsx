import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import {LogStore} from 'common';

class SnackMessageComponent extends Component {

  static getStores () {
    return [LogStore];
  }

  static calculateState () {
    return {action: LogStore.getLast() || {data: {key: ''}}};
  }

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentWillUpdate (nextProps, nextState) {
    this.setState({
      open: nextState.action.timestamp > Date.now() - 4000
    });
  }

  handleRequestClose () {
    this.setState({ open: false });
  }

  render () {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={getMessage(this.state.action.data)}
          autoHideDuration={4000}
          onRequestClose={() => this.handleRequestClose()} />
      </div>
    );
  }
}

export
const SnackMessage = Container.create(SnackMessageComponent);


function getMessage (data) {
  return {
    'hotel.put.success': `Hotel "${data.name}" has been successfully updated`,
    'hotel.post.success': `Hotel "${data.name}" has been successfully created`,
    'hotel.delete.success': `Hotel "${data.name}" has been successfully removed`
  }[data.key] || 'NO MESSAGE';
}