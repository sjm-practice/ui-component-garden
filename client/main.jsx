import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "../imports/ui/App";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ["Lato", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(
      ",",
    ),
  },
  palette: {
    primary: {
      main: "#f28020",
    },
    secondary: {
      main: "#767676",
    },
    error: {
      main: "#cc4b37",
    },
  },
});

// CssBaseline adds normalize.css and sets box-sizing to border-box
Meteor.startup(() => {
  render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
    document.getElementById("render-target"),
  );
});
