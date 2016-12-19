import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {API_ENDPOINT} from 'constants';

const style = {
  margin: 10,
  padding: 20
};

export
class HotelForm extends Component {
  change (field) {
    return ({target}) => {
      this.setState({[field]: target.value});
    };
  }

  submit () {
    console.log("SENDING", this.state);
    const method = 'post';
    const body = JSON.stringify(this.state);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(`${API_ENDPOINT}/hotels`, {
      method, body, mode:'cors', headers}).
      then(console.log);
  }

  render () {
    const action = this.props.params.hotelId ?
      'Edit' : 'Create';

    return (
      <div>
        <Paper style={style} zDepth={3} >
          <h2>{action} Hotel</h2>

          <TextField hintText="Name" onChange={this.change('name')} /><br />
          <TextField hintText="Type" onChange={this.change('type')}/><br />
          <TextField hintText="City" onChange={this.change('city')}/><br />
          <RaisedButton label="Submit" primary={true} onClick={() => this.submit()} />
        </Paper>
      </div>
    );
  }
}