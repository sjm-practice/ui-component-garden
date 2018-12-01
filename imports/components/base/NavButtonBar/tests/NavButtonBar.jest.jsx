/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import NavButtonBar from "..";

describe("<NavButtonBar />", () => {
  it("should match render snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavButtonBar />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Selected Links", () => {
    it("should show HOME link selected", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <NavButtonBar />
        </MemoryRouter>,
      );

      const home = wrapper.find("a[href='/']");
      expect(home.props().className).toMatch(/selected/);

      const contact = wrapper.find("a[href='/#contact']");
      expect(contact.props().className).toBeUndefined();

      const privacy = wrapper.find("a[href='/privacy-policy']");
      expect(privacy.props().className).toBeUndefined();
    });

    it("should show CONTACT link selected", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/#contact"]}>
          <NavButtonBar />
        </MemoryRouter>,
      );

      const home = wrapper.find("a[href='/']");
      expect(home.props().className).toBeUndefined();

      const contact = wrapper.find("a[href='/#contact']");
      expect(contact.props().className).toMatch(/selected/);

      const privacy = wrapper.find("a[href='/privacy-policy']");
      expect(privacy.props().className).toBeUndefined();
    });

    it("should show PRIVACY link selected", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/privacy-policy"]}>
          <NavButtonBar />
        </MemoryRouter>,
      );

      const home = wrapper.find("a[href='/']");
      expect(home.props().className).toBeUndefined();

      const contact = wrapper.find("a[href='/#contact']");
      expect(contact.props().className).toBeUndefined();

      const privacy = wrapper.find("a[href='/privacy-policy']");
      expect(privacy.props().className).toMatch(/selected/);
    });
  });
});
