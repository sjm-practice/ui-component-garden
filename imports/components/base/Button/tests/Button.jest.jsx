/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Button from "..";

describe("<Button />", () => {
  it("should match render snapshot", () => {
    const tree = renderer.create(<Button>Test</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
