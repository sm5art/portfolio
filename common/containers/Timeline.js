import React, { Component } from 'react';
import * as login from '../actions/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Timeline } from 'react-material-timeline';
import { Avatar } from '@material-ui/core';
import GithubIcon from '../components/GithubIcon';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {padding: 15}
};

const events = [{
    title: 'Event 1',
    subheader: new Date().toString(),
    description: [ 'Some description for event 1' ],
    icon: <Avatar><GithubIcon/></Avatar>,
  },
  {
    title: 'Event 2',
    subheader: new Date().toString(),
    description: [ 'Some description for event 2' ],
    icon: <Avatar><GithubIcon/></Avatar>,
  }
];
class TimelineContainer extends Component {
    constructor(props, context) {
      super(props, context);
    }
  
    render() {
      const { state, actions, classes } = this.props;
      return (
        <div className={classes.root}>
          <Timeline events={events}/>
        </div>
      );
    }
    
  }

function mapStateToProps(state) {
    return {
      state
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ ...login}, dispatch)
    };
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(TimelineContainer));
