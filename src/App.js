import { AppRoutes } from "./AppRoutes";
import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import NavBar from "./components/nav/NavBar";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={`${styles.Main}`}>
        <AppRoutes profile_id={profile_id} />
      </Container>
    </div>
  );
}

export default App;
