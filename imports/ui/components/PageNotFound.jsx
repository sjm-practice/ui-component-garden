import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    //
  },
};

const PageNotFound = ({ classes }) => (
  <div className={classes.container}>
    <Typography className={classes.message} variant="h4">
      Page Not Found.
    </Typography>
  </div>
);

PageNotFound.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(PageNotFound);
