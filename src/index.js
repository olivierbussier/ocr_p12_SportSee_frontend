import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

/**
 * The BrowserRouter instance is placed here in order to facilitate
 * the test of App component using Jest
 * Then, to test with Jest you have to declare a Memory router in Jest test
 * like this :
 *
 *  test("landing on a file page", () => {
 *  // use <MemoryRouter> when you want to manually control the history
 *  render(
 *    <MemoryRouter initialEntries={["<some route>>"]}>
 *      <App />
 *    </MemoryRouter>
 *  );
 *
 *  // verify navigation to "no match" route
 *   expect(
 *    screen.getByText(/<some text>/i)
 *  ).toBeInTheDocument();
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
