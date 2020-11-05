import React from 'react';

// component imports
import Header from "./header.jsx";
import Skills from "./skills.jsx";
import Projects from "./projects.jsx";
import Footer from "./footer.jsx";

// material-ui imports
import Grid from '@material-ui/core/Grid';

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./homePage.styles.js";

import bataboardpic from "../images/bataboardpic.jpg";
import fightauctionpic from "../images/fightauctionpic.jpg";
import financepic from "../images/financepic.jpg";



const HomePage = (props) => {

    const {classes} = props



    const descriptionsArr = [
        {
            title: "Fight Auction",
            description: "Full stack React application for buying and selling fight memorabilia as well as tracking fighter rankings. I used MongoDb and NodeJs for the backend",
            img: fightauctionpic,
            code: "https://github.com/danielrlackey/FightAuction",
            demo: "https://fightauction.herokuapp.com/home/",
        },
        {
            title: "Bataboard",
            description: "full stack IOS application that lets users sell products and services",
            img: bataboardpic,
            code: "https://github.com/danielrlackey",
            demo: "",
        },
        {
            title: "Finance Tracker",
            description: "full stack React application for tracking your finances and spending using Firebase and Nodejs for the backend",
            img: financepic,
            code: "https://github.com/danielrlackey/Finance-Manager-App",
            demo: "https://daniels-finance-application.herokuapp.com/ ",
        }
    ]

    


    return (
        <div className={classes.root}>
            <div className={classes.headerContainer}>
                <Header />
            </div>
            <Skills />
            <h1 className={classes.title}>Projects</h1>
            <Grid container
                direction="col"
                justify="center"
                alignItems="center"
            >
            {descriptionsArr && descriptionsArr.map((desc) => {
                return (
                        <Grid 
                            container item md={4}  
                        >
                        <Projects
                            title={desc.title}
                            description={desc.description}
                            img={desc.img}
                            code={desc.code}
                            demo={desc.demo}
                        />
                    </Grid>
                  
                )
            })}
             </Grid>
            <Footer />
        </div>
        
    ); 
};

export default (withStyles(styles, {withTheme: true})(HomePage));