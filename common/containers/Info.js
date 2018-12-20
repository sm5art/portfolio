import React, { Component } from 'react';
import * as login from '../actions/login';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';

class Info extends Component {
    constructor(props, context) {
      super(props, context);
    }
  
    componentDidMount() {
      document.getElementById('myVideo').addEventListener('loadedmetadata', function() {
        this.currentTime = 30;
        this.play();
      }, false);

      document.getElementById('myVideo').addEventListener('ended', function() {
        this.load();
        this.currentTime = 30;
        this.play();
      }, false);

    }

    render() {
      const { state, actions } = this.props;
      return (
        <React.Fragment>
          <div style={{position:'relative', width:"100%", height: 'auto', minHeight:'70%'}}>
            <div style={{position:'absolute', top: 0, right:0}}>
              <div style={{paddingRight: 30, paddingTop:"20"}}>
                <Typography classes={{root: {fontWeight: 'bold'}}} variant="h3" color="textSecondary">
                                            Making the world a better place
                                        </Typography>
              </div>
            </div>
            <video playsInline style={{minWidth:"100%", objectFit: 'fill', overflow:'hidden', filter:"opacity(45%)"}} muted id="myVideo">
              <source src="/static/earth.mp4" type="video/mp4"/>
            </video>
          </div>
          <div style={{padding: 5}}> 
            <Grid container spacing={24}>
              <Grid item xs>
                <Paper>xs</Paper>
              </Grid>
              <Grid item xs>
                <Paper>xs</Paper>
              </Grid>
              <Grid item xs>
                <Paper>xs</Paper>
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
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
  )(Info);
