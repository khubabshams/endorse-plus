import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom";
import NavBar from "../nav/NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();
});
