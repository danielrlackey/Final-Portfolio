import React from "react"

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faBootstrap, faCss3, faVuejs, faMdb, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./skills.styles.js";

const Skills = (props) => {

    const {classes} = props

    return (
        <div className={classes.container}>
            <h1 className={classes.aboutMeTitle}>About Me</h1>
            <p className={classes.bio}>Hi! I'm Daniel A software developer from the greater Tampa Bay Area.
                I would describe myself as a motivated go getter. For as long as I can Remember I've had a
                fascination with computers and technology and am now pursuing software development as my dream job.
                I'm proficient in HTMl, CSS, JavaScript, React, Vue, Bootstrap, Material-UI, NodeJs, Express, Firebase,
                MongoDb and a few other things. I believe I would be a great asset to any company looking for a
                motivated self-starter who is eager to learn. I look forward to hearing from you.
            </p>
            <h1 className={classes.title}>Skills</h1>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faReact} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faNodeJs} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faJs} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faBootstrap} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faCss3} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faMdb} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faVuejs} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
            <a href="/">
                <FontAwesomeIcon 
                    icon={faHtml5} 
                    size="3x" 
                    className={classes.icon}
                />
            </a>
        </div>
    )
}

export default (withStyles(styles, {withTheme: true})(Skills));