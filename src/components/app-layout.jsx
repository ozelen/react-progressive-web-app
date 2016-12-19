import React, {Component} from 'react';
import {HotelsList} from './hotels';
import {Link} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Style from './app-layout.less';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const muiTheme = getMuiTheme(lightBaseTheme);

injectTapEventPlugin();

const MENU = {
  '/hotels'   : 'Hotels',
  '/contacts' : 'Contacts',
  '/about'    : 'About'
};

export
class AppLayout extends Component {
  constructor (props) {
    super(props);
    this.state = {drawerOpen: false};
  }

  toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen})
  closeDrawer  = () => this.setState({drawerOpen: false})

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar title="Hotels Manager"
                onTouchTap={() => this.toggleDrawer()}
                iconClassNameRight="muidocs-icon-navigation-expand-more" />

        <Drawer open={this.state.drawerOpen} docked={false} onRequestChange={drawerOpen => this.setState({drawerOpen})}>
          {Object.keys(MENU).map(url =>
            <Link to={url} key={url}>
              <MenuItem onTouchTap={() => this.closeDrawer()}>
                {MENU[url]}
              </MenuItem>
            </Link>
          )}
        </Drawer>

        {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  }
}