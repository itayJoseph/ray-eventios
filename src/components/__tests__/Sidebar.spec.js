import React from "react";
import { Sidebar } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Sidebar />);
    expect(Error).toMatchSnapshot();
  });
});
