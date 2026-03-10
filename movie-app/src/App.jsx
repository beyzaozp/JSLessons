import { useState } from "react";

const MovieList = [
  {
    Id: "1",
    Title: "Interstellar",
    Year: "2014",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    Id: "2",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    Id: "3",
    Title: "The Dark Knight",
    Year: "2008",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    Id: "9",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    Id: "10",
    Title: "Blade Runner 2049",
    Year: "2017",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
  },
  {
    Id: "11",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  },
  {
    Id: "12",
    Title: "Arrival",
    Year: "2016",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
  },
  {
    Id: "18",
    Title: "The Grand Budapest Hotel",
    Year: "2014",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
  },
];

const selectedMovieList = [
  {
    Id: "1",
    Title: "Interstellar",
    Year: "2014",
    duration: 120,
    rating: 6.9,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    Id: "2",
    Title: "Inception",
    Year: "2010",
    duration: 114,
    rating: 8.5,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
];

function App() {
  const [movies, setMovies] = useState(MovieList);
  const [selectedMovies, setSelectedMovies] = useState(selectedMovieList);
  return (
    <>
      <nav className="bg-primary text-white p-2">
        <div className="container">
          <div className="row">
            <div className="col-4">Movie App</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Film Ara..."
              />
            </div>
            <div className="col-4 text-end">
              <strong>5</strong> kayıt bulundu.
            </div>
          </div>
        </div>
      </nav>

      <main className="container">
        <div className="row mt-2">
          <div className="col-md-9">
            <div className="movie-list">
              <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
                {movies.map((movie) => (
                  <div className="col mb-2" key={movie.Id}>
                    <div className="card">
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h6 className="card-title">{movie.Title}</h6>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-calendar2-date me-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.445 12.688V7.354h-.633A13 13 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <span>{movie.Year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="movie-list">
              {selectedMovieList.map((movie) => (
                <div className="card mb-2" key={movie.Id}>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h6 className="card-title">{movie.Title}</h6>
                        <div className="d-flex justify-content-between">
                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-hourglass-split text-warning me-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                            </svg>
                            <span>{movie.duration} dk</span>
                          </p>
                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-star-fill text-warning me-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <span>{movie.rating}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
