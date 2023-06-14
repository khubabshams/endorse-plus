import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/signin" render={() => <h1>Sign In</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/signup" render={() => <h1>Sign Up</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/boosted" render={() => <h1>Boosted</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/requests" render={() => <h1>Requests</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/logout" render={() => <h1>Logout</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/404" render={() => <h1>Page not found 404</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
