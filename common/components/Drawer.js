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


const DrawerItem = (props) => 
        <ListItem selected={window.location.pathname == props.path} onClick={()=>{browserHistory.push(props.path); props.actions.reverseDrawer();}} button>
              <ListItemIcon>{props.icon}</ListItemIcon>
              <ListItemText primary={props.name} />
            </ListItem>

class DrawerBase extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const { state, actions } = this.props;
        return (<Drawer open={state.toggled} onClose={()=>{actions.reverseDrawer()}}>
          <List>
            <DrawerItem actions={actions} name="Home" path="/" icon={<HomeIcon/>}/>
            <DrawerItem actions={actions} name="Timeline" path="/timeline" icon={<TimelineIcon/>}/>
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