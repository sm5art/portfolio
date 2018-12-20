import React, { Component } from 'react';
import * as login from '../actions/login';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';

class Timeline extends Component {
    constructor(props, context) {
      super(props, context);
    }
  
    render() {
      const { state, actions } = this.props;
      return (
        <Paper>
          timeline
        </Paper>
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
  )(Timeline);
