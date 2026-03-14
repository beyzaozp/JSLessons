import { useEffect, useState } from "react";

export default function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setResults] = useState(0);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    //first render (mount)
    const controller = new AbortController();
    const signal = controller.signal;

    async function getMovies(page) {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`,
          {
            headers: {
              accept: "application/json",
              Authorization: import.meta.env.VITE_TMDB_TOKEN,
            },
            //signal: signal,
          },
        );

        if (!res.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await res.json();
        if (data.total_results === 0) throw new Error("Sonuç bulunamadı");

        setMovies(data.results);
        setTotalPages(data.total_pages);
        setResults(data.total_results);
      } catch (err) {
        if (err.name === "AbortError") setError(err.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }

    if (query.length < 4) {
      setMovies([]);
      setError("");
      return;
    }

    getMovies(currentPage);
    return () => {
      controller.abort();
    };
  }, [query, currentPage]);

  return {
    error,
    loading,
    movies,
    totalResults,
    totalPages,
    currentPage,
    nextPage,
    previousPage,
  };
}
