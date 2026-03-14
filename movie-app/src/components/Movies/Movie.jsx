import formatDate from "../../helpers/dateFormatter";
export default function Movie({ movie, onSelectMovie, selectedMovie }) {
  return (
    <div className="col mb-2 ">
      <div
        className={`card movie ${selectedMovie === movie.id && "selected-movie"}`}
        onClick={() => onSelectMovie(movie.id)}
      >
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          }
          alt={movie.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div>
            <i className="bi bi-calendar2-date me-1"></i>
            <span>{formatDate(movie.release_date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
