import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../store/theme';
import CssBaseline from '@material-ui/core/CssBaseline';



class Shell extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        return (<MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <React.Fragment>
                        <div style={{flexGrow:1}}>
                            <AppBar color="primary" position="static">
                                <Toolbar>
                                    <IconButton style={{marginLeft: -12, marginRight: 20}} color="inherit" aria-label="Menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography variant="h6" color="inherit">
                                        Artur K.
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            { this.props.children }
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>);
    }
}

export default Shell;
