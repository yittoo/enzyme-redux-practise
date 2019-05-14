import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  const app = shallow(<App />);
  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a connected component", () => {
    // current version of enzyme and redux are not compatible with each other
    expect(app.find("ConnectFunction").exists()).toBe(true);
  });
});
