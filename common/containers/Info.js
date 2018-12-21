import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hero from '../components/Hero';

class Info extends Component {
    constructor(props, context) {
      super(props, context);
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

export default Info;
