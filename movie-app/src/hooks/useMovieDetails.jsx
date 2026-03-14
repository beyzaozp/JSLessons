import { useEffect, useState } from "react";

export default function useMovieDetails(selectedMovieId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovieId}`,
          {
            headers: {
              accept: "application/json",
              Authorization: import.meta.env.VITE_TMDB_TOKEN,
            },
          },
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
  }, [selectedMovieId]);

  return { loading, error, movie };
}
