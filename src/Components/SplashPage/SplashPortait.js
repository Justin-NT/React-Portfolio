import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import portrait from "../../assets/circle-portrait.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F5F8FA",
    padding: "2rem",
    display: "flex",
    flexFlow: "wrap column",
    borderBottom: "1px solid lightgray"
  },
  portrait: {
    height: 128,
    width: 128,
    borderRadius: "50%",
    padding: ".5rem",
    backgroundColor: "white",
    border: "1px solid darkgray",
    margin: "auto"
  },
  name: {
    marginTop: theme.spacing(1),
    color: "#3a4145",
    margin: "auto",
    fontWeight: "bold"
  },
  intro: {
    margin: ".5rem auto .1rem auto",
    color: "#aaa"
  }
}));

const SplashPortrait = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <img
        src={portrait}
        alt="self portrait"
        className={classes.portrait}
      ></img>
      <Typography className={classes.name} variant="h3">
        Justin Terry
      </Typography>
      <Typography className={classes.intro} variant="h5">
        Junior Full-Stack Developer
      </Typography>
    </header>
  );
};
export default SplashPortrait;

// #F5F8FA
