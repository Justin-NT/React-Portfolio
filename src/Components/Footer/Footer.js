import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"© "}
      {"Justin Terry "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiTypography-body2": {
      fontSize: ".75rem"
    }
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: "auto",
    borderTop: "1px solid lightgray",
    color: "#AAA",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    alignItems: "center"
  },
  copyright: { backgroundColor: "orange" },
  linkSection: {
    display: "flex"
  },
  contactImage: {
    margin: "0 .3rem 0 .3rem",
    height: "1.2rem",
    weight: "1.2rem"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Copyright className={classes.copyright} />
        <div className={classes.linkSection}>
          <div className={classes.contactElement}>
            <FaLinkedin className={classes.contactImage} />
          </div>
          <div className={classes.contactElement}>
            <FaGithubSquare className={classes.contactImage} />
          </div>
          <div className={classes.contactElement}>
            <FaEnvelopeSquare className={classes.contactImage} />
          </div>
        </div>
      </footer>
    </div>
  );
}

const Foot = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
