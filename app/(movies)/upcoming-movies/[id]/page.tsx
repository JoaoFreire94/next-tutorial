import MovieCard from "../../../../components/MovieCard.tsx";
import Paginator from "../../../../components/Paginator";
import { IMoviesInTheatresFromApi } from "../../../../types/globalTypes";
import getUpcomingMovies from "../../../../utils/DataFetch/getUpcomingMovies";

interface IUpcomingMoviesParams {
  params: {
    id: string;
  };
}
export default async function UpcomingMovies({
  params,
}: IUpcomingMoviesParams) {
  const movies: IMoviesInTheatresFromApi = await getUpcomingMovies(params.id);
  return (
    <div>
      <Paginator
        numberOfPages={movies.total_pages}
        page={movies.page}
        actualRoute={"/upcoming-movies"}
      />
      <div className="flex flex-row flex-wrap">
        {movies.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
