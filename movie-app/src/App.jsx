import { Children, useEffect, useState } from "react";
import StarRating from "./StarRating";

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value / array.length, 0);

export default function App() {
  const [query, setQuery] = useState("last");
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handeSelectMovie(id) {
    setSelectedMovie((selectedMovie) => (id === selectedMovie ? null : id));
  }
  function handleUnselectMovie() {
    setSelectedMovie(null);
  }

  function handleAddSelectedList(movie) {
    setSelectedMovies((selectedMovies) => [...selectedMovies, movie]);
    handleUnselectMovie();
  }
  function handleRemoveMovieFromList(id) {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((m) => m.id !== id),
    );
  }

  useEffect(() => {
    //first render (mount)
    const controller = new AbortController();
    const signal = controller.signal;

    async function getMovies() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}`,
          {
            signal: signal,
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQwYTdkYWUxYzJjYmI2MDQ4ZjJhYjU2NzE5MWQ0OCIsIm5iZiI6MTYyNjYwNDkyOC4zNjUsInN1YiI6IjYwZjQwNTgwZjkwYjE5MDA3NDZhM2FjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n1wlH5iw_r3Sd0p2jj8_tUot9Ex_ucCvcbfz6UQ_3sQ",
            },
          },
        );
        if (!res.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await res.json();
        if (data.total_results === 0) throw new Error("Sonuç bulunamadı");

        setMovies(data.results);
      } catch (err) {
        if (err.name === "AbortError") setError("Aborted");
        else setError(err.message);
      }
      setLoading(false);
    }
    if (query.length < 4) {
      setMovies([]);
      setError("");
      return;
    }
    getMovies();
    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <Nav>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </Nav>
      <Main>
        <div className="col-md-9">
          <ListContainer>
            {loading && <Loading />}
            {!loading && !error && (
              <MovieList
                movies={movies}
                onSelectMovie={handeSelectMovie}
                selectedMovie={selectedMovie}
              />
            )}
            {error && <ErrorMessage message={error} />}
          </ListContainer>
        </div>
        <div className="col-md-3">
          <ListContainer>
            {selectedMovie ? (
              <MovieDetails
                selectedMovie={selectedMovie}
                onUnselectMovie={handleUnselectMovie}
                onAddMovieToList={handleAddSelectedList}
                selectedMovies={selectedMovies}
              />
            ) : (
              <>
                <MyListSummary selectedMovies={selectedMovies} />
                <MyMovieList
                  selectedMovies={selectedMovies}
                  onRemoveMovie={handleRemoveMovieFromList}
                />
              </>
            )}
          </ListContainer>
        </div>
      </Main>
    </>
  );
}

function Loading() {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

function ErrorMessage({ message }) {
  return <div className="alert alert-danger">{message}</div>;
}

function Nav({ children }) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">{children}</div>
      </div>
    </nav>
  );
}
function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-2"></i>Movie App
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <div className="col-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control"
        placeholder="Film Ara..."
      />
    </div>
  );
}
function Results({ movies }) {
  return (
    <div className="col-4 text-end">
      <strong>{movies.length}</strong> kayıt bulundu.
    </div>
  );
}

function Main({ children }) {
  return (
    <main className="container">
      <div className="row mt-2">{children}</div>
    </main>
  );
}

function ListContainer({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-1"
        onClick={() => setIsOpen((val) => !val)}
      >
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies, onSelectMovie, selectedMovie }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onSelectMovie={onSelectMovie}
          selectedMovie={selectedMovie}
        />
      ))}
    </div>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return "Tarih Yok";
  return dateStr.split("-").reverse().join(" ");
}

function MovieDetails({
  selectedMovie,
  onUnselectMovie,
  onAddMovieToList,
  selectedMovies,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(null);

  const isAddedToList = selectedMovies.map((m) => m.id).includes(selectedMovie);
  const selectedMovieUserRating = selectedMovies.find(
    (m) => m.id === selectedMovie,
  )?.userRating;

  function handleAddtoMovieList() {
    const newMovie = { ...movie, userRating };
    onAddMovieToList(newMovie);
  }

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovie}`,
          options,
        );
        if (!res.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await res.json();
        if (data.total_results === 0) throw new Error("Sonuç bulunamadı");
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    getMovieDetails();
  }, [selectedMovie]);

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

function Movie({ movie, onSelectMovie, selectedMovie }) {
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

// function MyMovieListContainer() {
//   const [selectedMovies, setSelectedMovies] = useState(selectedMovieList);
//   const [isOpenSelectedMovies, setIsOpenSelectedMovies] = useState(true);
//   return (
//     <div className="movie-list">
//       <button
//         className="btn btn-sm btn-outline-primary mb-1"
//         onClick={() => setIsOpenSelectedMovies((val) => !val)}
//       >
//         {isOpenSelectedMovies ? (
//           <i className="bi bi-chevron-up"></i>
//         ) : (
//           <i className="bi bi-chevron-down"></i>
//         )}
//       </button>
//       {isOpenSelectedMovies && (
//         <>
//           <MyListSummary selectedMovies={selectedMovies} />
//           <MyMovieList selectedMovies={selectedMovies} />
//         </>
//       )}
//     </div>
//   );
// }

function MyListSummary({ selectedMovies }) {
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
            {avarageDuration.toFixed()} dk
          </p>
        </div>
      </div>
    </div>
  );
}

function MyMovieList({ selectedMovies, onRemoveMovie }) {
  return selectedMovies.map((movie) => (
    <MyListMovieCard
      movie={movie}
      key={movie.id}
      onRemoveMovie={onRemoveMovie}
    />
  ));
}

function MyListMovieCard({ movie, onRemoveMovie }) {
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
