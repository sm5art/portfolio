import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import * as timeline from '../actions/timeline';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

const styles = (theme) => ({
    contain: {position:'relative', width:"100%", height: 'auto', minHeight:'70%'},
    outer: {zIndex:500, position:'absolute', top: 0, right:0, width:'100%', height:'100%', backgroundColor:theme.palette.secondary.dark},
    inner: { padding:10},
    grow: { flexGrow: 1 },
    button: {
    margin: theme.spacing.unit,
    },
    yearText: {color: "#9c27b0"},
    rightIcon: {marginRight: theme.spacing.unit},
    desktopDiv: { paddingLeft: "15%", paddingRight:"15%"},
    video: {minWidth:"100%", objectFit: 'fill', overflow:'hidden'},
    gothic: { color: theme.palette.primary.light, fontFamily: 'Nanum Gothic'}
});

class Hero extends Component {
    state = {
        fade: false,
        years: null,
        width: null,
        height: null
    }
    constructor(props, context) {
        super(props, context);
        this.getYearDifference = this.getYearDifference.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        const that = this;
        window.addEventListener("resize", this.updateDimensions);
        if(! this.props.state.timeline.loaded){
            this.props.actions.fetchTimeline();
          }
        setTimeout(() => {that.setState({fade: true})}, 1000);

        document.getElementById('myVideo').addEventListener('loadedmetadata', function() {
            this.currentTime = 30;
            this.play();
          }, false);
    
          document.getElementById('myVideo').addEventListener('ended', function() {
            this.load();
            this.currentTime = 30;
            this.play();
          }, false);

        setInterval(() => {if(this.props.state.timeline.loaded) this.setState({years: this.getYearDifference()})}, 1000)
    }
    updateDimensions() {
        var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
      }
  
    componentWillMount() {
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    
    getYearDifference () {
        var d = new Date();
        var current_year = d.getTime();
        var n = this.props.state.timeline.data.length;
        var first_year = Date.parse(this.props.state.timeline.data[n-1]['created_at'])
        return parseInt((current_year-first_year)/1000);
    }

    componentDidUpdate() {
        if(this.props.state.timeline.loaded && !this.state.years){
            this.setState({years: this.getYearDifference()})
        }
    }

    render() {
        const {classes} = this.props;
        return (<div className={classes.contain}>
                    <div id='outer' className={classes.outer + " herotransition"}>
                        <div className={classes.inner + (this.state.width > 900 ? " " + classes.desktopDiv : "")}>
                            <Fade timeout={2000} in={this.state.fade}>
                                <Grid container spacing={40}>
                                    <Grid item xs={12}>
                                        <Typography className={classes.gothic} variant="h3" color="textPrimary">
                                            math student at UW Seattle
                                        </Typography>    
                                        <Typography className={classes.gothic} variant="h3" color="textPrimary">
                                            self-taught programmer
                                        </Typography> 
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="outlined" color="secondary" onClick={()=>{browserHistory.push('/timeline')}} className={classes.button}>
                                            <span className={classes.yearText}>{this.state.years}</span> &nbsp;seconds&nbsp;/&nbsp;{this.state.width > 900 && <span><span className={classes.yearText}>{parseInt(this.state.years/60/60/24)}</span><span>&nbsp;days&nbsp;/</span></span> }&nbsp;<span className={classes.yearText}>{parseInt(this.state.years/60/60/24/365)}</span> &nbsp;years of experience and counting
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </div>
                    </div>
                    <video playsInline className={classes.video} muted id="myVideo">
                        <source src="/static/earth.mp4" type="video/mp4"/>
                    </video>
                </div>);
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
  )(withStyles(styles)(Hero));