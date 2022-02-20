import { render, screen, cleanup } from "@testing-library/react";
import ClearButton from "../ClearButton/ClearButton";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

test("should render ClearButton component", () => {
  render(<ClearButton />);
  const clearButton = screen.getByTestId("ClearButton");
  expect(clearButton).toBeInTheDocument();
  expect(clearButton).toHaveTextContent("Clear Data");
});

test("should delete all sessionStorage when invoked", () => {
  sessionStorage.setItem("EmgData0", "testData");
  sessionStorage.setItem("EmgData1", "testData");
  sessionStorage.setItem("EmgData2", "testData");
  sessionStorage.setItem("EmgData3", "testData");
  sessionStorage.setItem("EmgData4", "testData");
  sessionStorage.setItem("EmgData5", "testData");
  sessionStorage.setItem("EmgTime", "testData");
  sessionStorage.setItem("PressureData0", "testData");
  sessionStorage.setItem("PressureData1", "testData");
  sessionStorage.setItem("PressureTime", "testData");
  sessionStorage.setItem("GyroData", "testData");
  sessionStorage.setItem("GyroTime", "testData");
  sessionStorage.setItem("DataCleared", "testData");

  const clearButton = shallow(<ClearButton />);

  clearButton.find("Button").first().simulate("click");

  clearButton.find("Button").last().simulate("click");

  expect(sessionStorage.getItem("EmgData0")).toBe(null);
  expect(sessionStorage.getItem("EmgData1")).toBe(null);
  expect(sessionStorage.getItem("EmgData2")).toBe(null);
  expect(sessionStorage.getItem("EmgData3")).toBe(null);
  expect(sessionStorage.getItem("EmgData4")).toBe(null);
  expect(sessionStorage.getItem("EmgData5")).toBe(null);
  expect(sessionStorage.getItem("EmgTime")).toBe(null);
  expect(sessionStorage.getItem("PressureData0")).toBe(null);
  expect(sessionStorage.getItem("PressureData1")).toBe(null);
  expect(sessionStorage.getItem("GyroData")).toBe(null);
  expect(sessionStorage.getItem("GyroTime")).toBe(null);
  expect(sessionStorage.getItem("DataCleared")).toBe("1");
});
