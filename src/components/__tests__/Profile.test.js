import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import { ProfileHeader } from "../profile/ProfileHeader";

const profile = {
  id: 1,
  name: "John Doe",
  title: "Software Developer",
};

test("renders profile page", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <ProfileHeader profile={profile} is_owner={profile.is_owner} />
      </CurrentUserProvider>
    </Router>
  );

  const name = await screen.findByText("John Doe");
  expect(name).toBeInTheDocument();

  const title = await screen.findByText("Software Developer");
  expect(title).toBeInTheDocument();
});
