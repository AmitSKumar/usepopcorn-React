import { useState, useEffect } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [error, SetError] = useState("");
  const KEY = "8a81dbe2";
  useEffect(
    function () {
      //if callback exist then only call
      // callback?.();
      //AbortController is browser Api
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          SetIsLoading(true);
          // always we start fetching data we should reset the error
          SetError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("there is no internet connection");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(() => data.Search);
          SetError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            SetError(err.message);
          }
        } finally {
          SetIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        SetError("");
        return;
      }
      //close movie detail when we serch for new movie
      // handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
