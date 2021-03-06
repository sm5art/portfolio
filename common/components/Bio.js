import React, { Component } from "react";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const BioItem = (props) => 
    <Grid item xs>
        <Grid container>
            <CardW image={props.image} classes={props.classes} title={props.title}>
                { props.children }
            </CardW>
        </Grid>
    </Grid>;


const CardW = (props) => 
    <Card className={props.classes.full}>
        { props.image ? <CardMedia
            className={props.classes.media}
            image= {props.image}
            /> : null }
        <CardContent> 
          <Typography gutterBottom variant="h5" component="h2">
            { props.title} 
          </Typography>
            { props.children }
        </CardContent>
    </Card>

    
const styles = {
    root: {paddingLeft:"10%", paddingRight:"10%", paddingBottom:"15px"},
    padded: {padding: '15'},
    full: {width: "100%"},
    media: {
        height: 140,
    },
    paddedBottom: {
        paddingBottom: 15
    },
    uwImage: {width: 50, height: 50,},
    
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
                    <Grid className={classes.paddedBottom} container spacing={40}>
                        <BioItem image="https://www.healthinformationmanagement.uw.edu/UWHIHIM/media/healthinfo/uw-bhihim-admissions.jpg" classes={classes} title="Education">
                            <Typography variant="body1">
                                <ul>
                                    <li>Currently studying Mathematics at University of Washington minor in Applied Mathematics '2021</li>
                                    <li>Part-time Full Stack Engineer at Heali.ai</li>
                                </ul>
                            </Typography>
                            <img className={classes.uwImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuQtl8fZhTO5GbjRjSYWy1q3EttHKvhYRvrSAOzxd8PgN8NeioQ" />

                        </BioItem>
                        <BioItem image="http://www.nipuncapital.com/img/nipunL_2.png" classes={classes} title="Work Experience">
                            <Typography variant="body1">
                            <ul>
                                <li>Quant. Research Intern at Nipun Capital LLC<br/><span style={{fontWeight: "bold"}}>Stack</span>: <ul><li>python</li><li>keras</li><li>pandas/numpy</li><li>MySQL</li></ul></li>
                                <li>Software Engineer intern at Minted<br/><span style={{fontWeight: "bold"}}>Stack</span>: <ul><li>python</li><li>MySQL</li><li>React-redux</li><li>AWS</li><li>Vagrant</li></ul></li>
                            </ul>
                            </Typography>
                        </BioItem>
                        <BioItem image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/24/08/spacex-rocket-launch-watch-video-0.jpg" classes={classes} title="Professional Interests">
                            <Typography variant="body1">
                            <ul>
                                <li>Game design/development (especially distribution/scaling)</li>
                                <li>Software product development</li>
                                <li>Embedded computing</li>
                            </ul>
                            </Typography>
                        </BioItem>
                    </Grid>
                </div>
    }
}  

export default withStyles(styles)(Bio);