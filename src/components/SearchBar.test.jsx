import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

const setup = () => {
  const utils = render(<SearchBar />);
  const input = utils.getByLabelText("search");
  return {
    input,
    ...utils,
  };
};

const validValue = (value) => {
  const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  const urlRegex =
    /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/;

  if (ipRegex.test(value) || urlRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

test("It should be a Ip adndress", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "216.239.32.0" } });
  expect(input.value).toBe("216.239.32.0");
});
test("It should be a host name", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "google.com" } });
  expect(input.value).toBe("google.com");
});
test("It should be  valid", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "216.239.32.0" } });
  expect(validValue(input.value)).toBeTruthy();
});
test("It should be not valid", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "216.239.32." } });
  expect(validValue(input.value)).toBeFalsy();
});
test("It should be  valid", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "google.com" } });
  expect(validValue(input.value)).toBeTruthy();
});
test("It should be not valid", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "google" } });
  expect(validValue(input.value)).toBeFalsy();
});
