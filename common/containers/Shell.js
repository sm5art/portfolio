import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


const Shell = (props) => 
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <React.Fragment>
            <AppBar color="primary" position="static">
            </AppBar>
                { props.children }
        </React.Fragment>
    </MuiThemeProvider>

export default Shell;
