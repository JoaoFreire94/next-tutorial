import MovieCard from "../../../../components/MovieCard.tsx";
import Paginator from "../../../../components/Paginator";
import { IMoviesInTheatresFromApi } from "../../../../types/globalTypes";
import getMoviesInTheatres from "../../../../utils/DataFetch/getMoviesInTheatres";

interface IInTheatresParams {
  params: {
    id: string;
  };
}
export default async function InTheatres({ params }: IInTheatresParams) {
  const movies: IMoviesInTheatresFromApi = await getMoviesInTheatres(params.id);
  return (
    <div>
      <Paginator
        numberOfPages={movies.total_pages}
        page={movies.page}
        actualRoute={"/in-theatres"}
      />
      <div className="flex flex-row flex-wrap">
        {movies.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
