import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom";
import NavBar from "../nav/NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();
});

test("renders logged in links", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const homeLink = await screen.findByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();

  const requestsLink = await screen.findByRole("link", { name: "Requests" });
  expect(requestsLink).toBeInTheDocument();

  const boostedLink = await screen.findByRole("link", { name: "Boosted" });
  expect(boostedLink).toBeInTheDocument();

  const logOuLink = await screen.findByRole("link", { name: "Logout" });
  expect(logOuLink).toBeInTheDocument();
});

test("renders logged out links", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const logOutLink = await screen.findByRole("link", { name: "Logout" });
  fireEvent.click(logOutLink);

  const homeLink = await screen.findByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();

  const signInLink = await screen.findByRole("link", { name: "Sign In" });
  expect(signInLink).toBeInTheDocument();

  const signUpLink = await screen.findByRole("link", { name: "Sign Up" });
  expect(signUpLink).toBeInTheDocument();
});
