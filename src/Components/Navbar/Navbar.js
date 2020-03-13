import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black"
  },
  title: {
    color: "black",
    textTransform: "uppercase",
    letterSpacing: ".15em",
    fontWeight: "bolder",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "orange",
      cursor: "pointer"
    }
  },
  AppBar: {
    backgroundColor: "white",
    boxShadow: "none",
    borderBottom: "1px solid lightgray"
  },
  Button: {
    color: "black",
    margin: theme.spacing(1),
    fontSize: ".9rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    letterSpacing: ".15em"
  },
  filler: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => props.history.push("/")}
          >
            Justin Terry
          </Typography>
          <div className={classes.filler}></div>
          <Button
            color="inherit"
            className={classes.Button}
            onClick={() => props.history.push("/projects")}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            className={classes.Button}
            onClick={e =>
              (window.location.href =
                "https://www.linkedin.com/in/justin-terry-743939194/")
            }
          >
            Linkedin
          </Button>
          <Button
            color="inherit"
            className={classes.Button}
            onClick={e =>
              (window.location.href = "https://github.com/Justin-NT")
            }
          >
            Github
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default withRouter(Navbar);
