import App from "../../component/App";
import { mount } from "enzyme";

describe("app", () => {
  it("end to end", () => {
    const wrapper = mount(<App />);
    const initialState = wrapper.state();
    console.log(initialState);
    const button3 = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "3"
    );
    const button2 = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "2"
    );
    const buttonPlus = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+"
    );
    const buttonEqual = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "="
    );
    button3.simulate("click");
    console.log(wrapper.state());
    buttonPlus.simulate("click");
    console.log(wrapper.state());
    button2.simulate("click");
    console.log(wrapper.state());
    buttonEqual.simulate("click");
    console.log(wrapper.state());

    const displayValue = wrapper.find(".component-display").children().text();
    expect(displayValue).toBe("5");
  });
});
