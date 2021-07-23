import Display from "../../component/Display";
import { render, shallow, mount } from "enzyme";

describe("display", () => {
  it("render ok", () => {
    const wrapper = render(<Display value="0" />);
    console.log(wrapper.html());
  });
  it("shallow ok", () => {
    const wrapper = shallow(<Display value="0" />);
    console.log(wrapper.html());
  });
  it("mount ok", () => {
    const wrapper = mount(<Display value="0" />);
    console.log(wrapper.html());
  });
});
