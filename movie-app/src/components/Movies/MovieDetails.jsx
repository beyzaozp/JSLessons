import { useState } from "react";
import useMovieDetails from "../../hooks/useMovieDetails";
import formatDate from "../../helpers/dateFormatter";

export default function MovieDetails({
  selectedMovie,
  onUnselectMovie,
  onAddMovieToList,
  selectedMovies,
}) {
  const [userRating, setUserRating] = useState(null);
  const { loading, error, movie } = useMovieDetails(selectedMovie);

  const isAddedToList = selectedMovies.map((m) => m.id).includes(selectedMovie);
  const selectedMovieUserRating = selectedMovies.find(
    (m) => m.id === selectedMovie,
  )?.userRating;

  function handleAddtoMovieList() {
    const newMovie = { ...movie, userRating };
    onAddMovieToList(newMovie);
  }

  return (
    <div className="card border p-2 mb-3">
      <div
        className="text text-danger align-self-end"
        style={{ cursor: "pointer" }}
        onClick={onUnselectMovie}
      >
        x
      </div>
      <button
        className={`btn ${isAddedToList ? "btn-success" : "btn-primary"} mb-2`}
        onClick={handleAddtoMovieList}
        disabled={isAddedToList}
      >
        {isAddedToList ? "Listede" : "Listeye Ekle"}
      </button>
      {!isAddedToList && (
        <div className="my-4">
          <StarRating
            size={20}
            color="green"
            maxRating={10}
            onRating={setUserRating}
          />
        </div>
      )}
      {loading && <Loading />}
      {!loading && !error && (
        <div className="row">
          <div className="col-4">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
              alt={movie.title}
              className="card-img-top img-fluid rounded"
            />
          </div>
          <div className="col-8">
            <h6>{movie.title}</h6>
            <i className="bi bi-calendar2-date me-1"></i>
            <span>{formatDate(movie.release_date)}</span>
            {movie.vote_average && (
              <p>
                <i className="bi bi-star-fill text-warning me-2"></i>
                {movie.vote_average?.toFixed(1)}
              </p>
            )}
            <p>
              <i className="bi bi-hourglass-split text-warning me-2"></i>
              {movie.runtime} dk
            </p>
            {selectedMovieUserRating && (
              <p>
                Değerlendirme :<i className="bi bi-stars text-success me-2"></i>
                {selectedMovieUserRating}
              </p>
            )}
          </div>
          <div className="col-12 border-top p-3">
            <p>{movie.overview}</p>
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="badge text-bg-primary me-1">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
