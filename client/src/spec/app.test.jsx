import React from "react";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../client/src/components/App.jsx";

configure({ adapter: new Adapter() });

describe("app should contain all child components", () => {
  const components = [
    "BottomPanel, FullView, LeftArrow, RightArrow, MainGallery, SidePanel, Thumbnail, ModalGallery"
  ];
  const wrapper = render(<App />);
  expect(wrapper.find("changeDisplay").toBe(true));
});

export { shallow, mount, render };
export default Enzyme;
