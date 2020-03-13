import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    padding: "2rem",
    margin: "auto",
    justifyContent: "center"
  },
  aboutSection: {
    // backgroundColor: "orange",
    display: "flex",
    flexFlow: "column wrap",
    maxWidth: "40%"
  },
  aboutHeader: {
    color: "#3a4145",
    margin: "24px 0 16px",
    fontWeight: "bold"
  },
  aboutParagraph: {
    color: "#2e2e2e",
    letterSpacing: ".01rem"
  },
  mediaSection: {
    // backgroundColor: "green",
    display: "flex",
    flexFlow: "column wrap",
    padding: "0 2rem"
  },
  contactHeader: {
    margin: "24px 0 16px",
    color: "#3a4145",
    fontWeight: "bold"
  },

  contactElement: {
    display: "flex",
    marginBottom: ".3rem",
    alignItems: "center"
  },
  contactImage: {
    height: "1.9rem",
    width: "1.9rem",
    marginRight: ".5rem"
  },
  contactName: {
    fontSize: "14px"
  }
}));

const SplashBody = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.aboutSection}>
        <Typography variant="h5" className={classes.aboutHeader}>
          About Me
        </Typography>
        <Typography variant="body1" className={classes.aboutParagraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
          perferendis aperiam? Ab nesciunt aliquid dolore? Labore distinctio
          necessitatibus dolores vitae nulla fuga inventore, a repellat facilis
          quisquam consequuntur aut aspernatur! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. A, perferendis aperiam? Ab nesciunt
          aliquid dolore? Labore distinctio necessitatibus dolores vitae nulla
          fuga inventore, a repellat facilis quisquam consequuntur aut
          aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A, perferendis aperiam? Ab nesciunt aliquid dolore? Labore distinctio
          necessitatibus dolores vitae nulla fuga inventore, a repellat facilis
          quisquam consequuntur aut aspernatur!
        </Typography>
      </div>
      <div className={classes.mediaSection}>
        <Typography className={classes.contactHeader} variant="h5">
          Contact
        </Typography>
        <div className={classes.contactElement}>
          <FaLinkedin className={classes.contactImage} />
          <span className={classes.contactName}>LinkedIn</span>
        </div>
        <div className={classes.contactElement}>
          <FaGithubSquare className={classes.contactImage} />
          <span className={classes.contactName}>GitHub</span>
        </div>
        <div className={classes.contactElement}>
          <FaEnvelopeSquare className={classes.contactImage} />
          <span className={classes.contactName}>Email</span>
        </div>
      </div>
    </div>
  );
};

export default SplashBody;
