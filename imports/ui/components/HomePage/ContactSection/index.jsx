import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ContactFormContainer from "./ContactFormContainer";

const styles = {
  container: {
    padding: "40px",
  },
  responsive: {
    maxWidth: "100%",
    height: "auto",
  },
};

const ContactSection = props => {
  const {
    classes: { container, responsive },
  } = props;

  return (
    <Grid container spacing={40} className={container}>
      <Grid item xs={12} md={6}>
        <img src="images/device.png" alt="Mobile Phone Device" className={responsive} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ContactFormContainer />
      </Grid>
    </Grid>
  );
};

ContactSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ContactSection);
