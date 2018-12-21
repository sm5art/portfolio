import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import theme from '../store/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import GithubIcon from '../components/GithubIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      fontFamily: 'Roboto',
    },
    menuButton: {marginLeft: -12, marginRight: 20},
    grow: {flexGrow:1},
    flex: {display: "flex"}
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
                                    <div className={classes.grow}>
                                        <Typography className={classes.root} variant="h6" color="inherit">
                                            Artur Kashperskiy
                                        </Typography>
                                    </div>
                                    <div className={classes.flex}>
                                        <IconButton color="inherit">
                                            <GithubIcon/>
                                        </IconButton>
                                        <IconButton color="inherit">
                                            <LinkedInIcon/>
                                        </IconButton>
                                        <IconButton color="inherit">
                                            <EmailIcon/>
                                        </IconButton>
                                    </div>
                                </Toolbar>
                            </AppBar>
                            { this.props.children }
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>);
    }
}

export default withStyles(styles)(Shell);
