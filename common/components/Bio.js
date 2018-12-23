import React, { Component } from "react";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const BioItem = (props) => 
    <Grid item xs>
        <Grid container>
            <Grid item xs={12}>
                <Typography className={props.classes.padded} variant="h4" color="textPrimary">{props.title}</Typography>
            </Grid>
            <Grid item xs={12}>
                { props.children }
            </Grid>
        </Grid>
    </Grid>;

    
const styles = {
    root: {paddingLeft:"10%", paddingRight:"10%", paddingBottom:"15px"},
    padded: {padding: '15'}
}

class Bio extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const { classes } = this.props;
        return <div className={classes.root}> 
                    <Typography className={classes.padded} variant="h3" color="textPrimary">
                            About me
                    </Typography>
                    <Grid container spacing={40}>
                        <BioItem classes={classes} title="Education">
                            Hi 
                        </BioItem>
                        <BioItem classes={classes} title="Work Experience">
                            hello there
                        </BioItem>
                        <BioItem classes={classes} title="Aspirations">
                            oops
                        </BioItem>
                    </Grid>
                </div>
    }
}  

export default withStyles(styles)(Bio);