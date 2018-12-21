import * as React from 'react';
import {
  CardHeader, CardContent,
  Card, Grid, withStyles
} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';


const styles = (theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  iconGrid: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    zIndex: 0,
  },
  line: {
    position: 'absolute',
    left: 'calc(50% - 1px)',
    width: '2px',
    height: '100%',
    backgroundColor: theme.palette.grey.A100,
  },
  cardContainer: {
    position: 'relative',
  },
  cardDecoratorLeft: {
    position: 'absolute',
	width: 0,
	height: 0,
	borderTop: '16px solid transparent',
	borderLeft: '16px solid' + theme.palette.grey.A100,
	borderBottom: '16px solid transparent',
    top: 'calc(50% - 16px)',
    left: '100%',
  },
  cardDecoratorRight: {
    position: 'absolute',
	width: 0,
	height: 0,
	borderTop: '16px solid transparent',
	borderRight: '16px solid' + theme.palette.grey.A100,
	borderBottom: '16px solid transparent',
    top: 'calc(50% - 16px)',
    right: '100%',
  }
});



class TimelineBase extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const classes = this.props.classes;

    return (
      <Grid container>
        { this.getRows() }
      </Grid>
    );
  }

  getRows() {
    const classes = this.props.classes;
    const n = this.props.events.length;
    return this.props.events.map((event, i) => ([
        <Grid item xs={5} key={'left-' + i}>
          { i % 2 === 0 && this.getTimelineElement(event, true, i, n) }
        </Grid>,
        <Grid item xs={2} key={'icon-' + i} className={classes.iconGrid}>
          <div className={classes.line}/>
          <div className={classes.iconContainer}>
            { event.icon }
          </div>
        </Grid>,
        <Grid item xs={5} key={'right-' + i}>
          { i % 2 !== 0 && this.getTimelineElement(event, false, i, n) }
        </Grid>
    ])).reduce((res, grid) => res = [ ...res, ...grid ], []);
  }

  getTimelineElement(event, isLeft, i, n) {
    const classes = this.props.classes;

    return (
        <Fade timeout={5000*(i/(n-1))+1000} in={true}>
        <div className={classes.cardContainer}>
        <div className={isLeft ?
          classes.cardDecoratorLeft : classes.cardDecoratorRight}/>
            <Card>
            <CardHeader title={event.title} subheader={event.subheader}/>
            <CardContent>
                { event.description }
            </CardContent>
            </Card>
        </div>
      </Fade>
    );
  }
}

export const Timeline = withStyles(styles)(TimelineBase);