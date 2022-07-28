import "./searchInput.style.css";
export const SearchInput = () => (
  <section className="search-field">
    <h2>Filters</h2>
    <input
      type="text"
      placeholder="Search movie by name"
      aria-label="movie search box"
    />
  </section>
);
