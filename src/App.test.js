import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InformationContainer from "./components/InformationContainer";
import LocationMap from "./components/LocationMap";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {
    ip: "255.255.110.0",
    city: "Panama",
    country_name: "Panama",
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  await act(async () => {
    render(<InformationContainer search={fakeUser} />, container);
  });

  expect(container.querySelector(".ip").textContent).toBe(fakeUser.ip);
  expect(container.querySelector(".city").textContent).toBe(fakeUser.city);
  expect(container.querySelector(".country").textContent).toBe(
    fakeUser.country_name
  );

  global.fetch.mockRestore();
});

jest.mock("./components/LocationMap", () => {
  return function DummyMap(props) {
    return (
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    );
  };
});

let mapContainer = null;
beforeEach(() => {
  mapContainer = document.createElement("div");
  document.body.appendChild(mapContainer);
});

afterEach(() => {
  unmountComponentAtNode(mapContainer);
  mapContainer.remove();
  mapContainer = null;
});

it("should render loacation information", () => {
  const center = { lat: 0, long: 0 };
  act(() => {
    render(<LocationMap center={center} />, mapContainer);
  });

  expect(mapContainer.querySelector('[data-testid="map"]').textContent).toEqual(
    "0:0"
  );
});
