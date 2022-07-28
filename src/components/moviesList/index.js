import { SingleMovie } from "../singleMovie";
import "./moviesList.style.css";
import { data } from "../../data";
console.log(data.title);
export const MoviesList = () => (
  <div className="movies-list">
    {data.map((movie) => (
      <SingleMovie image={movie.Poster} title={movie.Title} year={movie.Year} />
    ))}
     
  </div>
);
