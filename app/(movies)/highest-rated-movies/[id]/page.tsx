import MovieCard from "../../../../components/MovieCard.tsx";
import Paginator from "../../../../components/Paginator";
import { IMoviesInTheatresFromApi } from "../../../../types/globalTypes";
import getHighestRatedMovies from "../../../../utils/DataFetch/getHighestRatedMovies";

interface IHighestRated {
  params: {
    id: string;
  };
}
export default async function HighestRatedMovies({ params }: IHighestRated) {
  const movies: IMoviesInTheatresFromApi = await getHighestRatedMovies(
    params.id
  );
  return (
    <div>
      <Paginator
        numberOfPages={movies.total_pages}
        page={movies.page}
        actualRoute={"/highest-rated-movies"}
      />
      <div className="flex flex-row flex-wrap">
        {movies.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
