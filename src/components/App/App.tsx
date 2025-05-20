import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  return (
    <div className={styles.app}>
      <SearchBar />
    </div>
  );
}
