import React from "react";


// material ui imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./projects.styles.js";

const Projects = (props) => {

    const {classes, title, description, img, code, demo } = props;
  console.log(img)
    return(
        <div className={classes.container}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="#D4AF37">
            {title}
          </Typography>
          <Typography variant="body2" color="" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a className={classes.btn} href={code}>Code</a>
        </Button>
        <Button size="small" color="primary">
          <a className={classes.btn} href={demo}>Demo</a>
        </Button>
      </CardActions>
    </Card>

        </div>
    );
};

export default (withStyles(styles, {withTheme: true})(Projects));