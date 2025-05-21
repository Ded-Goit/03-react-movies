import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import type { Movie } from "../../types/movie";
import { useState } from "react";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearh = (newQuery: string) => {
    console.log("handleSearh", newQuery);
  };
  return (
    <div className={styles.app}>
      <SearchBar onSearch={handleSearh} />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
