import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export
class Page extends Component {
  render () {
    return (
      <Card>
        <CardTitle title={this.title} />
        <CardText>
          {this.body}
        </CardText>
      </Card>
    );
  }
}