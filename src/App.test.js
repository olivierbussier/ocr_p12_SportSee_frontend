import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

const { ResizeObserver } = window;

beforeEach(() => {
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});

test("landing on home (Karl) page", async () => {
  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    await screen.findByText(
      /Félicitation ! Vous avez explosé vos objectifs hier/i
    )
  ).toBeInTheDocument();

  expect (await (await screen.findByTestId("firstname-id")).innerHTML).toBe('Karl')

  expect(
    await screen.findByText(/Durée moyenne des sessions/i)
  ).toBeInTheDocument();
});

test("landing on home (Karl) page, then switch to Cecilia", async () => {
  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(
    await screen.findByText(
      /Félicitation ! Vous avez explosé vos objectifs hier/i
    )
  ).toBeInTheDocument();

  const select = screen.getByTestId('user-change-id')

  expect (await (await screen.findByTestId("firstname-id")).innerHTML).toBe('Karl')

  const user = userEvent.setup();
  user.selectOptions(select, "Cecilia");
  user.click(screen.getAllByTestId("user-change-id"));

  console.log(select.value)
  expect (await (await screen.findByTestId("firstname-id")).innerHTML).toBe('Cecilia')
});

test("landing on non existent page", async () => {
  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={["/nonexistent"]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  expect(
    await screen.findByText(/Oups! La page que vous demandez n'existe pas/i)
  ).toBeInTheDocument();
});

test("landing on correct url but non existent page", async () => {
  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={["/settings"]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  expect(
    await screen.findByText(/La page 'Réglages' n'existe pas encore/i)
  ).toBeInTheDocument();
});
