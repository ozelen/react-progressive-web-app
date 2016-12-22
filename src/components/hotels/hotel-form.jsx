import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {modify, create, update} from './hotel-service';
import { hashHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';

export
class HotelForm extends Component {
  constructor (props, context) {
    super(props, context);
    const {hotelId} = (this.props.params || this.props || {});
    this.action = hotelId ? 'Edit' : 'Create';
    this.method = hotelId ? 'put' : 'post';
    this.state = {
      hotel: context.hotel || {},
      open:true
    };
  }

  change (field) {
    return ({target}) => {
      this.setState({
        hotel: {
          ...toObj(this.context.hotel),
          ...this.state.hotel,
          ...{[field]: target.value}
        }
      });
    };
  }

  componentWillReceiveProps (props, context) {
    this.setState({
      hotel: {...toObj(context.hotel), ...this.state.hotel}
    });
  }

  get send () {
    return this.context.hotel ? update : create;
  }

  submit () {
    this.send(this.state.hotel).
      then(({_id}) => this.goTo('/hotels/' + _id));
  }

  goTo (path) {
    setTimeout(() => hashHistory.push(path), 100);
    this.setState({open:false})
  }

  get actions () {
    return [
      <RaisedButton label="Submit" primary={true}
                    onClick={() => this.submit()} />,

      <FlatButton label="Cancel"
                    onClick={() => this.goTo('/hotels/')} />
    ];
  }

  get open () {
    return this.state.open;
  }

  get title () {
    return this.action + ' Hotel';
  }

  static get contextTypes () {
    return {hotel: React.PropTypes.object};
  }

  render () {
    const {title, actions, open} = this;
    return (
      <div>
        <Dialog {...{title, actions, open, modal: true}}>
          <TextField hintText="Name" value={this.state.hotel.name} onChange={this.change('name')} /><br />
          <TextField hintText="Type" value={this.state.hotel.type} onChange={this.change('type')}/><br />
          <TextField hintText="City" value={this.state.hotel.city} onChange={this.change('city')}/><br />
        </Dialog>
      </div>
    );
  }
}

const toObj = x => x && x.toObject ? x.toObject() : x || {};