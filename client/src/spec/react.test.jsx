import React from "react";
import { render, mount, shallow } from "enzyme";
import SidePanel from "../client/src/components/SidePanel";
import Thumbnail from "../client/src/components/Thumbnail";
import App from "../client/src/components/App.jsx";

describe("<SidePanel />", () => {
  it("renders three <Thumbnail/> child components", () => {
    const wrapper = shallow(<SidePanel />);
    expect(wrapper.find("Thumbnail")).to.have.lengthOf(3);
  });
});

describe("<App />", () => {
  it("renders three <Thumbnail/> child components", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("Thumbnail")).toExist();
  });
});
