import MovieCard from "../../../components/MovieCard.tsx";
import Paginator from "../../../components/Paginator";
import { IMoviesInTheatresFromApi } from "../../../types/globalTypes";
import getMoviesInTheatres from "../../../utils/DataFetch/getMoviesInTheatres";

//To-DO TYPE
export default async function InTheatres({ params }: any) {
  const movies: IMoviesInTheatresFromApi = await getMoviesInTheatres(
    params["in-theatres"][1]
  );
  return (
    <div>
      <Paginator numberOfPages={movies.total_pages} page={movies.page} />
      {movies.results.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
