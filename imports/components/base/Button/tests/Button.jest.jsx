/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render } from "react-testing-library";
import "jest-styled-components";
import "jest-dom/extend-expect";
import Button from "..";

afterEach(cleanup);

describe("<Button />", () => {
  it("should match render snapshot", () => {
    const tree = renderer.create(<Button>Test</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Practice: testing variations", () => {
    it("react-test-renderer: should have class color palevioletred", () => {
      const tree = renderer.create(<Button>Test</Button>).toJSON();
      expect(tree).toHaveStyleRule("color", "palevioletred");
    });

    it("react-testing-library: should have class color palevioletred", () => {
      const { container } = render(<Button>Test</Button>);
      expect(container.firstChild).toHaveStyleRule("color", "palevioletred");
    });

    it("react-testing-library, jest-dom: should have disabled property when disabled", () => {
      const { container } = render(
        <Button disabled data-testid="test-button">
          Test
        </Button>,
      );
      expect(container.firstChild).toHaveAttribute("disabled");
    });
  });
});
