import React, { Component } from 'react';
import * as login from '../actions/login';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hero from '../components/Hero';
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
      const { state, actions, classes } = this.props;
      return (
        <React.Fragment>
          <Hero/>
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
