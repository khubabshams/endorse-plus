import { Container } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import RecoommendationCreateForm from "./pages/recommendations/RecommendationCreateForm";
import RecommendationPage from "./pages/recommendations/RecommendationPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/boosted" render={() => <h1>Boosted</h1>} />
          <Route exact path="/requests" render={() => <h1>Requests</h1>} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
          <Route exact path="/logout" render={() => <h1>Logout</h1>} />
          <Route
            exact
            path="/recommendations/create/:receiver_id"
            render={() => <RecoommendationCreateForm />}
          />
          <Route exact path="/recommendations/:id" render={() => <RecommendationPage />} />
          <Route render={() => <h1>Page not found 404</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
