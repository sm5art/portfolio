import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../store/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      fontFamily: 'Roboto',
    },
    menuButton: {marginLeft: -12, marginRight: 20},
    grow: {flexGrow:1}
};

class Shell extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const {classes} = this.props;
        return (<MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <React.Fragment>
                        <div className={classes.grow}>
                            <AppBar color="primary" position="static">
                                <Toolbar>
                                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography className={classes.root} variant="h6" color="inherit">
                                        Artur Kashperskiy
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            { this.props.children }
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>);
    }
}

export default withStyles(styles)(Shell);
