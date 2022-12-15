import Image from "next/image";
import { IMovie, IMovieFromApi } from "../../types/globalTypes";

const getPosterPath = (posterPath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

export default function MovieCard({ movie }: IMovie): JSX.Element {
  return (
    <div className="p-8">
      <h1>{movie.title}</h1>
      <Image
        src={getPosterPath(movie.poster_path)}
        alt={movie.title}
        width={300}
        height={500}
      />
    </div>
  );
}
