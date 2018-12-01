/* eslint-disable arrow-parens, object-curly-newline */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import NavBar from "./NavBar";
import IconButtons from "./IconButtons";

const styles = theme => ({
  appBar: {
    borderBottom: `8px solid ${theme.palette.primary.main}`,
    boxShadow: "none",
  },
  toolBar: {
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  spacer: {
    height: "95px", // height of AppBar, keeps content below MenuBar
  },
});

// App component - represents the whole app
const MenuBar = props => {
  const { classes } = props;

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Logo />
          <NavBar />
          <IconButtons />
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
    </Fragment>
  );
};

MenuBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(MenuBar);
