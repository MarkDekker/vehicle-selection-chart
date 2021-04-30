import React from "react";
import { render } from "react-dom";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { listings } from "./src/mockData/powerSearch";

import Example from "./src/Example";
import "./sandbox-styles.css";

render(
  <ParentSize>
    {({ width, height }) => (
      <Example width={width} height={500} listings={listings} />
    )}
  </ParentSize>,
  document.getElementById("root")
);
