import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
    
const styles = {
    root: {paddingLeft:"10%", paddingRight:"10%"},
    padded: {padding: '15'}
}

class Bio extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const { classes } = this.props;
        return <div className={classes.root}> 
                    <div className={classes.padded}>
                        <Typography variant="h4" color="textPrimary">
                            About me
                        </Typography>
                    </div>
                    <Grid className={classes.padded} container spacing={24}>
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

export default withStyles(styles)(Bio);