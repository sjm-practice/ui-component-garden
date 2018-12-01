/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import MenuBar from "..";

describe("<MenuBar />", () => {
  it("should match render snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <MenuBar />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
