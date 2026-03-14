export default function MyListMovieCard({ movie, onRemoveMovie }) {
  return (
    <div className="card mb-2" key={movie.Id}>
      <div className="row">
        <div className="col-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }
            alt={movie.title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-hourglass-split text-warning me-1"></i>
                <span>{movie.runtime} dk</span>
              </p>
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.vote_average?.toFixed(1)}</span>
              </p>
            </div>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onRemoveMovie(movie.id)}
            >
              Filmi Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
