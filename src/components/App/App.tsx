import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  return (
    <div className={styles.app}>
      <SearchBar />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
    </div>
  );
}
