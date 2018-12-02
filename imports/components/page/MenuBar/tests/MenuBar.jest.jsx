/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import MenuBar from "..";

describe("<MenuBar />", () => {
  it("should match render snapshot", () => {
    const tree = renderer.create(<MenuBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
