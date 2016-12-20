import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {modify} from './hotel-service';
import { hashHistory } from 'react-router';

const style = {
  margin: 10,
  padding: 20
};

export
class HotelForm extends Component {
  constructor (props) {
    super(props);
    const {hotelId} = (this.props.params || this.props || {});
    this.action = hotelId ? 'Edit' : 'Create';
    this.method = hotelId ? 'put' : 'post';
  }
  change (field) {
    return ({target}) => {
      this.setState({[field]: target.value});
    };
  }

  submit () {
    modify(this.method)(this.state).
      then(({_id}) => hashHistory.push('/hotels/' + _id));
  }

  render () {
    return (
      <div>
        <Paper style={style} zDepth={3} >
          <h2>{this.action} Hotel</h2>

          <TextField hintText="Name" onChange={this.change('name')} /><br />
          <TextField hintText="Type" onChange={this.change('type')}/><br />
          <TextField hintText="City" onChange={this.change('city')}/><br />
          <RaisedButton label="Submit" primary={true} onClick={() => this.submit()} />
        </Paper>
      </div>
    );
  }
}