import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import MenuBar from "../..";

storiesOf("Components", module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add("MenuBar", () => <MenuBar />);
