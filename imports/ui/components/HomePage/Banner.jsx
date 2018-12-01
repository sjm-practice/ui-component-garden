import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

/* eslint-disable jsx-a11y/anchor-has-content */

const MyLink = props => (
  <a
    href="https://app.eatdrinkhealthy.co/"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

const styles = {
  bannerButton: {
    color: "white",
    fontWeight: "bold",
    width: "140px",
    marginLeft: "5%",
    "@media all and (max-width:1024px)": {
      fontWeight: "normal",
      width: "110px",
      height: ".8em",
    },
  },
};

const Banner = ({ classes: { bannerButton } }) => (
  <section className="banner-container">
    <div className="banner-headline">
      A platform to find, share, and discuss healthy places to shop and eat.
    </div>
    <Button
      variant="extendedFab"
      color="primary"
      className={bannerButton}
      component={MyLink}
    >
      Web App
    </Button>
  </section>
);

Banner.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Banner);
