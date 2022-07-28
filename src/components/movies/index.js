import { MoviesList } from "../moviesList";
import { SearchInput } from "../searchInput";
import "./movies.style.css";

export const Movies = () => (
  <section className="movies">
    <SearchInput/>
    <h2>Marvel Series</h2>
    <MoviesList/>
    <h2>Other Movies</h2>
    <MoviesList/>
  </section>
);
