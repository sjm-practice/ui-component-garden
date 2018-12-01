import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const required = value => (value ? undefined : "Required field.");

const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address."
    : undefined;

const minLength2 = value =>
  value && value.length < 2 ? "Must have a least 2 characters." : undefined;

const maxLength40 = value =>
  value && value.length > 40 ? "Must not have more than 40 characters." : undefined;

const maxLength500 = value =>
  value && value.length > 500 ? "Must not have more than 500 characters." : undefined;

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    fullWidth
    style={{ margin: "10px 0 10px 0" }}
    error={touched && !!error}
    helperText={touched && error}
    variant="outlined"
    label={label}
    {...input}
    {...custom}
  />
);

renderInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string.isRequired,
  type: PropTypes.string, // eslint-disable-line react/require-default-props
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const styles = {
  formButton: {
    color: "white",
    fontWeight: "bold",
    float: "right",
  },
};

const ContactFormComponent = props => {
  const {
    handleSubmit,
    classes: { formButton },
  } = props;

  return (
    <div>
      <Typography variant="h4" color="primary">
        Contact Us
      </Typography>
      <form id="contactForm" onSubmit={handleSubmit}>
        <Field
          name="contactName"
          label="Name"
          component={renderInput}
          type="text"
          validate={[required, minLength2, maxLength40]}
        />

        <Field
          name="contactEmail"
          label="Email"
          component={renderInput}
          type="email"
          validate={[required, emailFormat]}
        />

        <Field
          name="contactMessage"
          label="Message"
          multiline
          rows={10}
          component={renderInput}
          validate={[required, minLength2, maxLength500]}
        />

        <Button
          id="contactSubmit"
          className={formButton}
          type="submit"
          size="large"
          variant="extendedFab"
          color="primary"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

ContactFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const onSubmitSuccess = (result, dispatch, props) => {
  // on successful submit, clear form fields
  props.change("contactName", "");
  props.untouch("contactName"); // clears validation error

  props.change("contactEmail", "");
  props.untouch("contactEmail"); // clears validation error

  props.change("contactMessage", "");
  props.untouch("contactMessage"); // clears validation error

  // set focus on contactName field
  // NOTE: using document.querySelector is not a React standard (works here, not in jest)
  const contactNameElem = document.querySelector("input#contactName");
  if (contactNameElem) {
    contactNameElem.focus();
  }
};

const ContactForm = reduxForm({
  form: "contactForm",
  onSubmitSuccess,
})(withStyles(styles)(ContactFormComponent));

export default ContactForm;
