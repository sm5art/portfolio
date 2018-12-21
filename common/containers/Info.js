import React, { Component } from 'react';
import Hero from '../components/Hero';
import Bio from '../components/Bio';

class Info extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      const { state, actions, classes } = this.props;
      return (
        <React.Fragment>
          <Hero/>
          <Bio/>
        </React.Fragment>
      );
    }
    
}

export default Info;
