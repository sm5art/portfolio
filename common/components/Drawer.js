import React, { Component } from 'react';
import * as drawer from '../actions/drawer';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { browserHistory } from 'react-router';

class DrawerBase extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const { state, actions } = this.props;
        return (<Drawer open={state.toggled} onClose={()=>{actions.reverseDrawer()}}>
          <List>
            <ListItem onClick={()=>{browserHistory.push('/'); actions.reverseDrawer();}} button>
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={()=>{browserHistory.push('/timeline'); actions.reverseDrawer();}} button>
              <ListItemIcon><TimelineIcon/></ListItemIcon>
              <ListItemText primary="Timeline" />
            </ListItem>
        </List>
        </Drawer>);
    }
}

function mapStateToProps(state) {
    return {
      state: state.drawer
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...drawer}, dispatch)
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DrawerBase);