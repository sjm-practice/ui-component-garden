import { configure } from "@storybook/react";

import "../client/main.css";

const req = require.context("../imports/ui", true, /__stories__\/.*.stories.jsx?/);

function loadStories () {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
