import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "../../../components/base/Button";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: "darkblue",
  },
};

const HomePage = ({ classes }) => (
  <div className={classes.container}>
    <Typography className={classes.message} variant="h4">
      HomePage.
    </Typography>
    <Button onClick={() => alert("clicked!")}>Push Me.</Button>
  </div>
);

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(HomePage);
