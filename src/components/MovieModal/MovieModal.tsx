import css from "./MovieModal.module.css";
import type { Movie } from "../../types/movie";
import { useEffect } from "react";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  /*useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains(css.backdrop)) {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClickOutside);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);*/

  return (
    <div
      className={css.backdrop}
      role="dialog"
      onClick={handleBackdropClick}
      aria-modal="true"
    >
      <div className={css.modal}>
        <button className={css.closeButton} aria-label="Close modal">
          &times;
        </button>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="movie_title"
          className={css.image}
        />
        <div className={css.content}>
          <h2>movie_title</h2>
          <p>movie_overview</p>
          <p>
            <strong>Release Date:</strong> movie_release_date
          </p>
          <p>
            <strong>Rating:</strong> movie_vote_average/10
          </p>
        </div>
      </div>
    </div>
  );
}
