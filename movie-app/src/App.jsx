import { useState } from "react";
import StarRating from "./components/StarRating.jsx";
import useMovies from "./hooks/useMovies.jsx";
import useLocalStorage from "./hooks/useLocalStorage.jsx";
import Pagination from "./components/Pagination.jsx";
import Loading from "./components/Loading.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Logo from "./components/Navbar/Logo.jsx";
import Results from "./components/Navbar/Results.jsx";
import Search from "./components/Navbar/Search.jsx";
import MovieList from "./components/Movies/MovieList.jsx";
import Main from "././components/Main.jsx";
import ListContainer from "./containers/ListContainer.jsx";
import MyListSummary from "./components/SelectedMovies/MyListSummary.jsx";
import MyMovieList from "./components/SelectedMovies/MyMovieList.jsx";

export default function App() {
  const [query, setQuery] = useState("mother");
  const [selectedMovies, setSelectedMovies] = useLocalStorage(
    [],
    "selectedMovies",
  );
  const [selectedMovie, setSelectedMovie] = useState(null);

  const {
    error,
    loading,
    movies,
    totalResults,
    totalPages,
    currentPage,
    nextPage,
    previousPage,
  } = useMovies(query);

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

  return (
    <>
      <Nav>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Results totalResults={totalResults} />
      </Nav>
      <Main>
        <div className="col-md-9">
          <ListContainer>
            {loading && <Loading />}
            {!loading && !error && (
              <>
                <MovieList
                  movies={movies}
                  onSelectMovie={handeSelectMovie}
                  selectedMovie={selectedMovie}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onCurrentPage={nextPage}
                  onPreviousPage={previousPage}
                />
              </>
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
