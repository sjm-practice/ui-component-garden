/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../state/stores/store";
import MenuBar from "./components/MenuBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PageNotFound from "./components/PageNotFound";

// App component - represents the whole app
export default class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <MenuBar />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route component={PageNotFound} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
