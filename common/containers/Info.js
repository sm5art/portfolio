import React, { Component } from 'react';
import * as login from '../actions/login';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';

class Info extends Component {
    constructor(props, context) {
      super(props, context);
    }
  
    render() {
      const { state, actions } = this.props;
      return (
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
