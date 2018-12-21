import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const styles = {
    root: {
        fontFamily: 'Spectral'

    },
    contain: {position:'relative', width:"100%", height: 'auto', minHeight:'70%'},
    outer: {zIndex:500, position:'absolute', top: 0, right:0, width:'100%', height:'100%', backgroundColor:'#121858'},
    inner: { padding:10},
    video: {minWidth:"100%", objectFit: 'fill', overflow:'hidden'}
}

class Hero extends Component {
    state = {
        fade: false
    }
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const that = this;
        setTimeout(() => {that.setState({fade: true})}, 1000);

        document.getElementById('myVideo').addEventListener('loadedmetadata', function() {
            this.currentTime = 30;
            this.play();
          }, false);
    
          document.getElementById('myVideo').addEventListener('ended', function() {
            this.load();
            this.currentTime = 30;
            this.play();
          }, false);
    }

    render() {
        const {classes} = this.props;
        return (<div className={classes.contain}>
                    <div id='outer' className={classes.outer + " herotransition"}>
                        <div className={classes.inner}>
                            <Fade timeout={2000} in={this.state.fade}>
                                <Typography className={classes.root} variant="h3" color="textPrimary">
                                    embedded systems | machine learning | data science | software engineering
                                </Typography>
                            </Fade>
                        </div>
                    </div>
                    <video playsInline className={classes.video} muted id="myVideo">
                        <source src="/static/earth.mp4" type="video/mp4"/>
                    </video>
                </div>);
    }
}

export default withStyles(styles)(Hero);