import React, { Component } from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
    
class Bio extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        return <div style={{padding: 5}}> 
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
    }
}  

export default Bio;