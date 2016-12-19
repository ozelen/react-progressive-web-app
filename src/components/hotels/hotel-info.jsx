import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Hotel from 'material-ui/svg-icons/maps/hotel';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';

export
const HotelInfo = ({name, type, city}) =>
  <Card>
    <CardHeader
      title={name}
      subtitle={`${type}, ${city}`}
      avatar={<Avatar icon={<Hotel />} />} />
    <CardTitle title={name} subtitle={type} />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Edit" icon={<Edit/>} />
      <FlatButton label="Delete" icon={<Delete/>} />
    </CardActions>
  </Card>;