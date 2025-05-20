import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function App() {
  return (
    <div className={styles.app}>
      <SearchBar />
      <MovieGrid />
    </div>
  );
}
