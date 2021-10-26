import styles from "./app.module.scss";
import { Person } from "./person";

export function App() {
  return (
    <div className={styles.app}>
      <main>
        <Person />
      </main>
    </div>
  );
}

export default App;
