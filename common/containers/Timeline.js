import React, { Component } from 'react';
import * as timeline from '../actions/timeline';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Timeline } from '../components/Timeline';
import { Avatar } from '@material-ui/core';
import GithubIcon from '../components/GithubIcon';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  normal: {paddingTop: 20, paddingLeft: "25%", paddingRight: "25%"},
  smaller: {padding: 12},
  progress: {
    margin: theme.spacing.unit * 2,
    marginLeft: "50%",
  },
});

const map = {
  0:() => <Avatar><GithubIcon/></Avatar>, 
  1:() => <Avatar><WorkIcon/></Avatar>,
  2:() => <Avatar><SchoolIcon/></Avatar>,
}

//0 is for genetic pong 
//1 is for UW
const extraMap = {
  0: () => ["iframe", "https://www.youtube.com/embed/mFOKdGye7vY"],
  1: () => ["img", "https://s3.amazonaws.com/media.guidebook.com/upload/MobileApp/1067/m3dkkYsBX5DT6kxNvBTay5hQhaLWC6fE6xwE"]
}

class TimelineContainer extends Component {
    state = {
      processed: false,
      events: null,
      width: null,
      height: null
    }
    constructor(props, context) {
      super(props, context);
      this.processEvents = this.processEvents.bind(this);
      this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions() {
      var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }

    componentWillMount() {
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentDidMount () {
      const { actions } = this.props;
      window.addEventListener("resize", this.updateDimensions);
      if(! this.props.state.loaded){
        actions.fetchTimeline();
      }
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
      const { classes } = this.props;
      console.log(this.props.state)
      return (
        this.state.processed ? (
          <div className={this.state.width < 900 ? classes.smaller : classes.normal}>
            <Timeline events={this.state.events}/>
          </div>) : <CircularProgress className={classes.progress} />);
      
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
