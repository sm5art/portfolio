import React, { Component } from 'react';
import * as timeline from '../actions/timeline';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Timeline } from '../components/Timeline';
import { Avatar } from '@material-ui/core';
import GithubIcon from '../components/GithubIcon';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {padding: 15}
};

const map = {
  0:() => <Avatar><GithubIcon/></Avatar>, 
  1:() => <Avatar><WorkIcon/></Avatar>,
  2:() => <Avatar><SchoolIcon/></Avatar>,
}

//0 is for genetic pong 
//1 is for UW
const extraMap = {
  0: () => <iframe width="560" height="315" src="https://www.youtube.com/embed/mFOKdGye7vY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  1: () => <img style={{width: 200, height: 200}} src="https://s3.amazonaws.com/media.guidebook.com/upload/MobileApp/1067/m3dkkYsBX5DT6kxNvBTay5hQhaLWC6fE6xwE"></img>
}

class TimelineContainer extends Component {
    state = {
      processed: false,
      events: null
    }
    constructor(props, context) {
      super(props, context);
      this.processEvents = this.processEvents.bind(this);
    }

    componentDidMount () {
      const { actions } = this.props;
      actions.fetchTimeline();
    }

    componentDidUpdate() {
      if(!this.state.processed & this.props.state.timeline.loaded) {
          this.processEvents();
      }
    }

    processEvents(){
      const { state } = this.props;
      let events = []
      for(var i = 0; i < state.timeline.data.length; i++) {
        const object = state.timeline.data[i];
        let event = { title: object['name'], subheader: object['created_at'], description: object['description'], icon: map[object['type']]()};
        if('extra_type' in object) {
          event['extra'] = extraMap[object['extra_type']]()
        }
        events.push(event)
      }
      this.setState({processed: true, events})
    }
  
    render() {
      const { state, classes } = this.props;
      let loadedComponent = null;
      if(this.state.processed){
        loadedComponent = (
          <div className={classes.root}>
            <Timeline events={this.state.events}/>
          </div>);
      }
      return (
    state.timeline.loaded ? loadedComponent : <div>Not Loaded</div>);
      
    }
    
  }

function mapStateToProps(state) {
    return {
      state
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ ...timeline}, dispatch)
    };
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(TimelineContainer));
