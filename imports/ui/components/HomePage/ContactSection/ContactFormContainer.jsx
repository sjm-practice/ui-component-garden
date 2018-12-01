import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import ContactForm from "./ContactForm";

class ContactContainer extends Component {
  submit = values => {
    Meteor.call(
      "sendMail",
      values.contactName,
      values.contactEmail,
      values.contactMessage,
      error => {
        if (error) {
          alert("Oh no! Something went wrong! Message wasn't sent.");
        } else {
          alert("Message sent! Thank you for contacting us!");
        }
      },
    );
  };

  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export default ContactContainer;
