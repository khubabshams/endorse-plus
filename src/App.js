import { Container } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import RecommendationsListPage from "./pages/recommendations/RecommendationsListPage";
import RecommendationCreateEditForm from "./components/recommendation/RecommendationCreateEditForm";
import RecommendationPage from "./pages/recommendations/RecommendationPage";
import RecommendationRouter from "./pages/recommendations/RecommendationRouter";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={`${styles.Main}`}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <RecommendationRouter profile_id={profile_id} />}
          />
          <Route
            exact
            path="/boosted"
            render={() => (
              <RecommendationsListPage
                filter={`boosts__profile=${profile_id}&ordering=-boosts__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/requests" render={() => <h1>Requests</h1>} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
          <Route exact path="/logout" render={() => <h1>Logout</h1>} />
          <Route
            exact
            path="/recommendations/create/:receiver_id"
            render={() => <RecommendationCreateEditForm />}
          />
          <Route
            exact
            path="/recommendations/:id"
            render={() => <RecommendationPage />}
          />
          <Route render={() => <h1>Page not found 404</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
