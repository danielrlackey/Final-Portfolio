import React from "react";

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./header.styles.js";


const Header = (props) => {

    const {classes} = props

    return(
        <div className={classes.container}>
            <h1 className={classes.title}>Daniel Lackey</h1>
            <h2 className={classes.title}>Jr Software Developer</h2>
            <a href="https://github.com/danielrlackey">
            <FontAwesomeIcon 
              icon={faGithub} 
              size="3x" 
              className={classes.icon}
            />
        </a>
      
        <a href="https://www.linkedin.com/in/daniel-lackey-a5b46b1aa/">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size="3x" 
              className={classes.icon}
            />
        </a>
        <a href="/">
            <FontAwesomeIcon 
              icon={faFile} 
              size="3x" 
              className={classes.icon}
            />
        </a>
        </div>
    );
};

export default (withStyles(styles, {withTheme: true})(Header));