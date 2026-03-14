import MyListMovieCard from "./MyListMovieCard.jsx";
export default function MyMovieList({ selectedMovies, onRemoveMovie }) {
  return selectedMovies.map((movie) => (
    <MyListMovieCard
      movie={movie}
      key={movie.id}
      onRemoveMovie={onRemoveMovie}
    />
  ));
}
