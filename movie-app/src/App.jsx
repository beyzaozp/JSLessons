import { Children, useState } from "react";

const MovieListData = [
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

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value, 2) / array.length;

export default function App() {
  const [movies, setMovies] = useState(MovieListData);
  const [selectedMovies, setSelectedMovies] = useState(selectedMovieList);

  return (
    <>
      <Nav>
        <Logo />
        <Search />
        <Results movies={movies} />
      </Nav>
      <Main>
        <div className="col-md-9">
          <ListContainer>
            <MovieList movies={movies} />
          </ListContainer>
        </div>
        <div className="col-md-3">
          <ListContainer>
            <>
              <MyListSummary selectedMovies={selectedMovies} />
              <MyMovieList selectedMovies={selectedMovies} />
            </>
          </ListContainer>
        </div>
      </Main>
    </>
  );
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
function Search() {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film Ara..." />
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

function MovieList({ movies }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie key={movie.Id} movie={movie} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  return (
    <div className="col mb-2" key={movie.Id}>
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{movie.Title}</h6>
          <div>
            <i className="bi bi-calendar2-date me-1"></i>
            <span>{movie.Year}</span>
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
  const avarageRating = getAverage(selectedMovieList.map((m) => m.rating));
  const avarageDuration = getAverage(selectedMovieList.map((m) => m.duration));
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
            <i className="bi bi-star-fill text-warning me-2"></i>
            {avarageDuration} dk
          </p>
        </div>
      </div>
    </div>
  );
}

function MyMovieList({ selectedMovies }) {
  return selectedMovies.map((movie) => (
    <MyListMovieCard movie={movie} key={movie.Id} />
  ));
}
function MyListMovieCard({ movie }) {
  return (
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
                <i className="bi bi-hourglass-split text-warning me-1"></i>
                <span>{movie.duration} dk</span>
              </p>
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.rating}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
