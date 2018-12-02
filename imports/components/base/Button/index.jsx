import React from "react";
import PropTypes from "prop-types";
import BaseButton from "./styles";

const Button = props => <BaseButton {...props} />;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Button;
