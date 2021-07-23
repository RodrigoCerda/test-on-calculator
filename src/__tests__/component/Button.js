import { shallow } from "enzyme";
import Button from "../../component/Button";

describe("button", () => {
  it("shallow y click", () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button clickHandler={handleClick} />);
    wrapper.find("button").simulate("click")
    expect(handleClick).toHaveBeenCalled()
  });
});
