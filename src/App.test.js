import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders navbar links", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/evaluate outfit/i)).toBeInTheDocument();
  expect(screen.getByText(/style tips/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});