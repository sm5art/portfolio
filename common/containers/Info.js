import React, { Component } from 'react';
import * as login from '../actions/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Info extends Component {
    constructor(props, context) {
      super(props, context);
    }
  
    render() {
      const { state, actions } = this.props;
      return (
        <div style={{backgroundColor: "black"}}>
            <div style={{margin: 20}}>
                
            </div>
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
  )(Info);
