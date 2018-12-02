import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../state/stores/store";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import MenuBar from "../components/page/MenuBar";
import Footer from "../components/page/Footer";
import Button from "../components/base/Button";

const handleClick = () => alert("clicked."); // eslint-disable-line no-alert

// App component - represents the whole app
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menubar" component={MenuBar} />
          <Route path="/footer" component={Footer} />
          <Route
            path="/button"
            render={() => <Button onClick={handleClick}>Button</Button>}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
