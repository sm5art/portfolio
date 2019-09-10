import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import theme from '../store/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import GithubIcon from '../components/GithubIcon';
import * as drawer from '../actions/drawer';
import LinkedInIcon from '../components/LinkedInIcon';
import { withStyles } from '@material-ui/core/styles';
import DrawerBase from '../components/Drawer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const styles = (theme) => ({
    root: {
      fontWeight: 'bold',
    },
    menuButton: { marginLeft: -12, marginRight: 20 },
    rightIcon: {
        marginRight: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
      },
    button: {
        margin: theme.spacing.unit,
    },
    grow: { flexGrow:1 },
    flex: { display: "flex" }
});

class Shell extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const {classes, actions} = this.props;
        return (<MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <DrawerBase/>
                    <React.Fragment>
                        <div className={classes.grow}>
                            <AppBar color="primary" position="static">
                                <Toolbar>
                                    <IconButton onClick={()=>{actions.reverseDrawer()}} className={classes.menuButton} color="inherit" aria-label="Menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <div className={classes.grow}>
                                        <Typography className={classes.root} variant="h6" color="inherit">
                                            Artur Kashperskiy
                                        </Typography>
                                    </div>
                                    <div className={classes.flex}>
                                        <Button target="_sblank" variant="contained" className={classes.button} color="primary" href="/static/AKresume.pdf">
                                                <CloudDownloadIcon className={classes.rightIcon}/>
                                                        CV
                                        </Button>
                                        <IconButton href="https://github.com/sm5art" color="inherit" aria-label="Github">
                                            <GithubIcon/>
                                        </IconButton>
                                        <IconButton href="https://www.linkedin.com/in/artur-kashperskiy-9171ab11a/" color="inherit" aria-label="LinkedIn">
                                            <LinkedInIcon/>
                                        </IconButton> 
                                        <IconButton href="mailto:arturk@uw.edu" color="inherit" aria-label="Email">
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
function mapStateToProps(state) {
    return {
      state: state.drawer
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...drawer}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Shell));
