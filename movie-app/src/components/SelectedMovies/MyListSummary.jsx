import getAverage from "../../helpers/getAverage";

export default function MyListSummary({ selectedMovies }) {
  const avarageRating = getAverage(selectedMovies.map((m) => m.vote_average));
  const avarageUserRating = getAverage(selectedMovies.map((m) => m.userRating));
  const avarageDuration = getAverage(selectedMovies.map((m) => m.runtime));
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>Listeye [{selectedMovies.length}] film eklendi</h5>
        <div className="d-flex justify-content-between">
          <p>
            <i className="bi bi-star-fill text-warning me-2"></i>
            {avarageRating.toFixed(2)}
          </p>
          <p>
            <i className="bi bi-stars text-warning me-2"></i>
            {avarageUserRating.toFixed(2)}
          </p>
          <p>
            <i className="bi bi-hourglass-split text-warning me-2"></i>
            {avarageDuration} dk
          </p>
        </div>
      </div>
    </div>
  );
}
