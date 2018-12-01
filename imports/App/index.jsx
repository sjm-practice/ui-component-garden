import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../state/stores/store";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Footer from "../components/page/Footer";

// App component - represents the whole app
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/footer" component={Footer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
