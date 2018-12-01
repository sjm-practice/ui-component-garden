/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import HomePage from "..";
import appReducer from "../../../../state/reducers";

describe("<HomePage />", () => {
  const testStore = createStore(appReducer);

  it("should match render snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={testStore}>
          <HomePage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
